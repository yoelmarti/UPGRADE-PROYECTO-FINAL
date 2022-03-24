import React from 'react'
import { Link } from 'react-router-dom'
import MapView from '../../components/MapView/MapView'

const Home = () => {
  return (

    <section className="relative  bg-blueGray-50">
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-[500px]">
            <div className="absolute top-0 w-full h-full bg-center bg-cover bg-[url('https://ep00.epimg.net/elviajero/imagenes/2016/01/29/album/1454068637_170439_1454079257_album_normal.jpg')]" >
              <span id="blackOverlay" className="w-full h-full absolute opacity-70 bg-black"></span>
            </div>
            <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    <h1 className="text-white font-semibold text-5xl">
                      Pueblo Busca Familia
                    </h1>
                    <h3 className="text-white font-semibold text-2xl">La plataforma que ayuda a los pueblos a que no cierren sus colegios</h3>
                    <button className='font-medium text-white hover:text-black uppercase w-full block p-4 mt-[40px] text-lg rounded-full bg-[#744253] drop-shadow-2xl hover:bg-[#CC998D] focus:outline-none'><Link to='villages'>Ver Pueblos</Link></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
              <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
              </svg>
            </div>
          </div>
          <section className="pb-10 bg-blueGray-200 -mt-24">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#CC998D]">
                      <img className='w-[30px]' src={`http://localhost:4000/public/house-home.svg`} alt='family'/>
                      </div>
                      <h6 className="text-xl font-semibold">Ayuntamientos</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                      ¿Estarías dispuesto a ofrecer una casa a una familia a cambio de que sus hijos se matriculen en tu escuela?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#4C6663]">
                        <img className='w-[30px]' src={`http://localhost:4000/public/family-svgrepo-com.svg`} alt='family'/>
                      </div>
                      <h6 className="text-xl font-semibold">Familias</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                      ¿Quieres que tus hijos crezcan en un entorno rural y asumir menos gastos fijos mensuales? ¿Te imaginas no tener que pagar un alquiler?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#481620]">
                      <img className='w-[30px]' src={`http://localhost:4000/public/web-ui-svgrepo-com.svg`} alt='family'/>
                      </div>
                      <h6 className="text-xl font-semibold">Tu Plataforma</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                      Si has respondido afirmativamente a alguna de las preguntas anteriores has llegado al sitio correcto. Inicia sesión para ver las casas disponibles en cada pueblo :)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
        </section>
        <div className='w-full h-[600px]'>
          <MapView/>
        </div>
  </section>
)}

export default Home