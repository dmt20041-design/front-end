const API_URL="http://localhost:8080";
const loginForm=document.getElementById("loginForm");
const usernameInput=document.getElementById("username");
const passwordInput=document.getElementById("password");
const togglePassword=document.getElementById("togglePassword");
const loginButton=document.getElementById("loginButton");
const buttonText=document.getElementById("buttonText");
const loading=document.getElementById("loading");
const message=document.getElementById("message");

togglePassword.addEventListener("click",function(){
  if(passwordInput.type==="password"){passwordInput.type="text";togglePassword.textContent="🙈";}
  else{passwordInput.type="password";togglePassword.textContent="👁";}
});
function showMessage(text,type){message.textContent=text;message.className="message "+type;}
function setLoading(isLoading){
  loginButton.disabled=isLoading;
  buttonText.classList.toggle("hidden",isLoading);
  loading.classList.toggle("hidden",!isLoading);
}
loginForm.addEventListener("submit",async function(event){
  event.preventDefault();
  const username=usernameInput.value.trim();
  const password=passwordInput.value;
  if(!username||!password){showMessage("Vui lòng nhập đầy đủ thông tin.","error");return;}
  setLoading(true);showMessage("","");
  try{
    const response=await fetch(`${API_URL}/api/auth/login`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({username,password})
    });
    let data=null;
    try{data=await response.json();}catch{}
    if(response.ok){
      if(data?.accessToken)localStorage.setItem("accessToken",data.accessToken);
      if(data?.refreshToken)localStorage.setItem("refreshToken",data.refreshToken);
      if(data?.tokenType)localStorage.setItem("tokenType",data.tokenType);
      showMessage("Đăng nhập thành công!","success");
      setTimeout(()=>window.location.href="dashboard.html",700);
      return;
    }
    showMessage(data?.message||data?.error||"Tên đăng nhập hoặc mật khẩu không đúng.","error");
  }catch(error){
    console.error("Login error:",error);
    showMessage("Không thể kết nối đến máy chủ. Hãy kiểm tra Backend Spring Boot.","error");
  }finally{setLoading(false);}
});
passwordInput.addEventListener("keydown",function(event){if(event.key==="Enter")loginForm.requestSubmit();});
