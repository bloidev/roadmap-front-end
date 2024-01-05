"use client"
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup"; 

export default function Contact(){
    return (
        <main className="mx-6 border border-slate-300 min-h-screen flex justify-center">
            <div className="rounded-md bg-white shadow-md w-96 h-96 p-5 mt-3">
                <Formik initialValues={{
                    nombre: "", correo: "", mensaje: ""
                }}
                onSubmit={(values, {setSubmitting}) => {
                    console.log(values);
                    //setSubmitting(false)
                }}
                validationSchema={Yup.object({
                    nombre: Yup.string().required("El nombre es requerido"),
                    correo: Yup.string().email("Correo invalido").required("El correo es requerido"),
                    mensaje: Yup.string().required("El mensaje es requerido") 
                })}
                >
                    <Form>
                    <h4 className="text-3xl font-bold text-center">Contactame</h4>
                    <div className="grid grid-cols-1 gap-2">
                        <div className="flex flex-col">
                            <label className="font-bold" htmlFor="nombre">Nombre</label>                            
                            <Field id="nombre" name="nombre" placeholder="John" className="border border-slate-300 rounded-sm h-[25px]"/>
                            <ErrorMessage name="nombre" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold" htmlFor="correo">Correo</label>
                            <Field id="correo" name="correo" placeholder="mouredev@gmail.com" type="email"/>
                            <ErrorMessage name="correo" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold" htmlFor="mensaje">Mensaje</label>                            
                            <Field id="mensaje" name="mensaje" placeholder="John" type="textarea" rows={3}/>
                            <ErrorMessage name="mensaje" />
                        </div>
                        <div>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2 w-full">Enviar</button>
                        </div>
                    </div>
                    </Form>
                </Formik>
            </div>
        </main>
    )
}