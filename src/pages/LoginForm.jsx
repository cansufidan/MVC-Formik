import { useFormik } from "formik"
import { schema } from "./schema"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
    const {user, signUser} = useContext(UserContext);

    const navigate = useNavigate();

    if(user){
        navigate("/coins")
    }

    const formik = useFormik({
        initialValues:{
            email:"",
            age:"",
            password:"",
            confirmPassword:"",
            terms:false,
        },
        validationSchema: schema,

        onSubmit: async (values, actions) => {
            await new Promise((resolve) => setTimeout(resolve, 2000))
            signUser(values);

            actions.resetForm();
            
            navigate = ('/coins');
        }
    })

  return (
  <div>
    <div className='container'>
        <div className='logo'>
            <img src='/coin-logo.png'/>
            <h3>Coinmania</h3>
        </div>

        <form onSubmit={formik.handleSubmit}>
            <div>
            <label>Email</label>
            <input 
            name="email" 
            value={formik.values.email}
            className={formik.errors.email && formik.touched.email && "error"}
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            type='text' 
            placeholder='ör:isim@şirket.com'/>
            {formik.errors.email && formik.touched.email && (
              <p>{formik.errors.email}</p>
              )}
            </div>

            {formik.errors.email && <p>{formik.touched.email}</p>}

            <div>
            <label>Yaş</label>
            <input  
            className={formik.errors.age && formik.touched.age && "error"} 
            name="age" 
            onChange={formik.handleChange} 
            type='number' 
            placeholder='ör:34'/>
            {formik.errors.age && formik.touched.age && (
            <p>{formik.errors.age}</p>
            )}
            </div>

            <div>
            <label>Şifre</label>
            <input
             className={formik.errors.password && formik.touched.password && "error"} 
             name="password" 
             onChange={formik.handleChange} 
             onBlur={formik.handleBlur}  
             type='text' placeholder='••••••'/>
            {formik.errors.password && formik.touched.password && (
              <p>{formik.errors.password}</p>
            )}
            </div>

            <div>
            <label>Şifre Onay</label>
            <input 
             className={formik.errors.confirmPassword && formik.touched.confirmPassword && "error"}
            name="confirmPassword" 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}  
            type='text' 
            placeholder='••••••'/>
            {formik.errors.confirmPassword && formik.touched.confirmPassword &&(
              <p>{formik.errors.confirmPassword}</p>
              )}
            </div>

            <div className="check-wrapper">
            <div className='check'>
                <input name="terms" onChange={formik.handleChange} type='checkbox' id='terms'/>
                <label htmlFor='terms'>Koşulları okudum ve onaylıyorum</label>
            </div>
            {formik.errors.terms && formik.touched.terms && (
              <p>{formik.errors.terms}</p>
              )}
            </div>
            <button disabled={formik.isSubmitting} type="submit">Kaydol</button>
        </form>
    </div>
  </div>)
}

export default LoginForm