function request(code){
  let xhr = new XMLHttpRequest()
  xhr.withCredentials = true
  xhr.open('get', 'http://localhost:4000/login')
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  xhr.send('code='+code)
  console.log(xhr)
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText)
    }else{
      console.log(xhr)
    }
  }
}
export default request
