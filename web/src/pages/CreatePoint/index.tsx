import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { Map, TileLayer, Marker } from 'react-leaflet'

import './styles.css'

import logo from '../../assets/logo.svg'

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Re-collection" />

        <Link to='/'>
          <FiArrowLeft />
          Go to Home
        </Link>
      </header>
      <form>
        <h1>Sign the <br />collection point.</h1>

        <fieldset>
          <legend>
            <h2>Datas</h2>
          </legend>
          <div className="field">
            <label htmlFor="name">Entity name</label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input type="text" name="whatsapp" id="whatsapp" />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Address</h2>
            <span>Select the address on the map.</span>
          </legend>

          <Map
            center={[-8.136485, -34.9175803]}
            zoom={15}
          >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker
              position={[-8.136485, -34.9175803]}
            />
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">State</label>
              <select name="uf" id="uf">
                <option value="0">Select a state</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="city">City</label>
              <select name="city" id="city">
                <option value="0">Select a City</option>
              </select>
            </div>
          </div>
        </fieldset>


        <fieldset>
          <legend>
            <h2>Collection items</h2>
            <span>Select one or more items below.</span>
          </legend>

          <ul className="items-grid">
            <li>
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="lampadas" />
              <span>Lâmpada</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="lampadas" />
              <span>Lâmpada</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="lampadas" />
              <span>Lâmpada</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="lampadas" />
              <span>Lâmpada</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="lampadas" />
              <span>Lâmpada</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="lampadas" />
              <span>Lâmpada</span>
            </li>
          </ul>

          <button type="submit">
            Register collection point
          </button>

        </fieldset>
      </form>
    </div>
  )
}

export default CreatePoint