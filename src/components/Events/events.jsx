import "./events.css"
import Title from "../Title/title";
function Events () {
    return(
        <section className="events">
             <Title mainTitle="events" subTitle="comprehensive guide to the weekly schedule of MUTC"  />
        <div className="container">
        {/* <h1>MUTC Weekly Events Schedule</h1> */}
        <div className="event">
          <h2>Cyber Security</h2>
          <p><strong>When:</strong> Every Monday, 4 PM - 7 PM</p>
          <p><strong>Where:</strong> Computer Lab F04</p>
          <p><strong>Instructor:</strong> Webster Ifedha</p>
        </div>
        <div className="event">
      <h2>UI/UX</h2>
      <p><strong>When:</strong> Every Tuesday, 5 PM - 8 PM</p>
      <p><strong>Where:</strong> Computer Lab F04</p>
      <p><strong>Instructor:</strong> Manase Gunga</p>
    </div>

    <div className="event">
      <h2>Web Development</h2>
      <p><strong>When:</strong> Every Wednesday, 6 PM - 9 PM</p>
      <p><strong>Where:</strong> Computer Lab F04</p>
      <p><strong>Instructor:</strong> Carolyne Githenduka</p>
    </div>
    <div className="event">
      <h2>Mobile Apps Development</h2>
      <p><strong>When:</strong> Every Thursday, 4 PM - 7 PM</p>
      <p><strong>Instructor:</strong> Stanley Amunze</p>
    </div>

    <div className="event">
      <h2>Cloud Engineering</h2>
      <p><strong>When:</strong> Every Friday, 3 PM - 6 PM</p>
      <p><strong>Where:</strong> Computer Lab F04</p>
      <p><strong>Instructor:</strong> Paul Karanja</p>
    </div>
    <div className="event">
      <h2>Power Platform</h2>
      <p><strong>When:</strong> Every Saturday, 1 PM - 4 PM</p>
      <p><strong>Where:</strong> Computer Lab F04</p>
      <p><strong>Instructor:</strong> Evyonn Mbithe</p>
    </div>
  </div>
  </section>
    )

}
export default Events;