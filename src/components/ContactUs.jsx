import './ContactUsStyle.css'

function ContactUs(){
    return(
        <div className="c-form">

            <h1>send a message to us!</h1>
            <form>
            <input placeholder="Name"/>
            <input placeholder="Email"/>
            <input placeholder="Subject"/>
            <textarea placeholder="Message" rows="4"></textarea>
            <button>Send Message</button>
            </form>
        </div>
    )
}

export default ContactUs