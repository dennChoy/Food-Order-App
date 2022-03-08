import { useRef, useState } from 'react';
import classes from './Checkout.module.css';


const isEmpty = value => value.trim() === '';

const Checkout = (props) => {

    const iptName = useRef();
    const iptCity = useRef();
    const iptAddress = useRef();

    const [formInputValidity, setFormValidity] = useState({
        name: true, 
        city: true,
        address: true,
    });
    const submitConfirmForm = (event)=> {
        event.preventDefault();
        const enteredName = iptName.current.value; 
        const enteredCity = iptCity.current.value;
        const enteredAddress = iptAddress.current.value;

        setFormValidity({
            name: !isEmpty(enteredName),
            city: !isEmpty(enteredCity),
            address: !isEmpty(enteredAddress)
        });

        const formIsValid = !isEmpty(enteredName) && !isEmpty(enteredCity) && !isEmpty(enteredAddress);
        if(!formIsValid){
            console.log("errors in form info");
            return;
        }

        props.ConfirmOrder({
            name: enteredName,
            city: enteredCity,
            address: enteredAddress
        })

    }

    const nameControlClasses =  `${classes.group} ${formInputValidity.name ? '': classes.invalid}`;
    const cityControlClasses =  `${classes.group} ${formInputValidity.city ? '': classes.invalid}`;
    const addressControlClasses =  `${classes.group} ${formInputValidity.address ? '': classes.invalid}`;
    

    return(
        <form className={classes.form} onSubmit={submitConfirmForm}>
            <div className={nameControlClasses}>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" ref={iptName}/>
                {!formInputValidity.name &&<p>Este valor no puede estar en blanco</p>}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor="city">Departamento</label>
                <select id="city" ref={iptCity}>
                    <option>Guatemala</option>
                    <option>Chimaltenango</option>
                    <option>Sacatepequez</option>
                </select>
                {!formInputValidity.city &&<p>Este valor no puede estar en blanco</p>}
            </div>
            <div className={addressControlClasses}>
                <label htmlFor="address">Dirección</label>
                <input type="text" id="address" ref={iptAddress}/>
                {!formInputValidity.address &&<p>Este valor no puede estar en blanco</p>}
            </div>
            <div className={classes.actions}>
                <button type='submit' className={classes.submit}>Confirmar Pedido</button>
                <button type='button' onClick={props.CancelSubForm}>Cancelar</button>
            </div>
        </form>
    );
}

export default Checkout;