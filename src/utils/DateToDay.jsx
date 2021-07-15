const dateToDay =(value)=>{
    let date = new Date(value);
    let day = date.toLocaleString('en-us', {weekday: 'long'});
return day
}


export default  dateToDay