const homescreen =async (req,res)=>{
    res.render('pages/index')
}
const loginscreen =async (req,res)=>{
    res.render('pages/login')
}
const registerscreen =async (req,res)=>{
    res.render('pages/register')
}
export {homescreen,loginscreen,registerscreen}