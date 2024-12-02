import React from 'react'
import '../Register/registerStyle.css';


const footer = () => {
  return (
    <div>
      <footer className="bg-brown mb-0" id="footer">
            <div className="d-flex justify-content-between flex-column flex-lg-row p-4 px-5">
                <div className="d-flex flex-column pt-2 justify-content-between">
                    <p className="align-self-baseline">
                        SustainED
                    </p>
                    <p className="align-self-baseline inria fs-6">
                        &copy; INFO 442: Cooperative Software Development; SustainED; 2024
                    </p>
                </div>
                <div className="inria pe-5 pt-2">
                    <h2>Contributers:</h2>
                    <ul>
                        <li>Zoie Aquino</li> 
                        <li>Keiver Bencomo</li>
                        <li>Khadija Dial</li>
                        <li>Alex Han</li>
                        <li>Justin Tang</li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default footer
