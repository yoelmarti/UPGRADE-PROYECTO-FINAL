import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section class="relative  bg-blueGray-50">
    <div class="relative pt-16 pb-32 flex content-center items-center justify-center h-[500px]">
            <div class="absolute top-0 w-full h-full bg-center bg-cover bg-[url('https://ep00.epimg.net/elviajero/imagenes/2016/01/29/album/1454068637_170439_1454079257_album_normal.jpg')]" >
              <span id="blackOverlay" class="w-full h-full absolute opacity-70 bg-black"></span>
            </div>
            <div class="container relative mx-auto">
              <div class="items-center flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div class="pr-12">
                    <h1 class="text-white font-semibold text-5xl">
                      Pueblo Busca Familia
                    </h1>
                    <h3 class="text-white font-semibold text-2xl">La plataforma que ayuda a los pueblos a que no cierren sus colegios</h3>
                    <button className='font-medium text-white hover:text-black uppercase w-full block p-4 mt-[40px] text-lg rounded-full bg-[#744253] drop-shadow-2xl hover:bg-[#CC998D] focus:outline-none'><Link to='villages'>Ver Pueblos</Link></button>
                  </div>
                </div>
              </div>
            </div>
            <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
              <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
              </svg>
            </div>
          </div>
          <section class="pb-10 bg-blueGray-200 -mt-24">
            <div class="container mx-auto px-4">
              <div class="flex flex-wrap">
                <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div class="px-4 py-5 flex-auto">
                      <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#CC998D]">
                        <i class="fas fa-award"></i>
                      </div>
                      <h6 class="text-xl font-semibold">Ayuntamientos</h6>
                      <p class="mt-2 mb-4 text-blueGray-500">
                      ¿Estarías dispuesto a ofrecer una casa a una familia a cambio de que sus hijos se matriculen en tu escuela?
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-4/12 px-4 text-center">
                  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div class="px-4 py-5 flex-auto">
                      <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#4C6663]">
                        <i class="fas fa-retweet"></i>
                      </div>
                      <h6 class="text-xl font-semibold">Familias</h6>
                      <p class="mt-2 mb-4 text-blueGray-500">
                      ¿Quieres que tus hijos crezcan en un entorno rural y asumir menos gastos fijos mensuales? ¿Te imaginas no tener que pagar un alquiler?
                      </p>
                    </div>
                  </div>
                </div>
                <div class="pt-6 w-full md:w-4/12 px-4 text-center">
                  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div class="px-4 py-5 flex-auto">
                      <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#481620]">
                        <i class="fas fa-fingerprint"></i>
                      </div>
                      <h6 class="text-xl font-semibold">Tu Plataforma</h6>
                      <p class="mt-2 mb-4 text-blueGray-500">
                      Si has respondido afirmativamente a alguna de las preguntas anteriores has llegado al sitio correcto. Inicia sesión para ver las casas disponibles en cada pueblo :)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
        </section>
        <seccion className='w-full'>
          <div className='drop-shadow-2xl '>
            <img className='w-2/5 ml-[150px] rounded-full' src={'http://localhost:4000/public/map-landpage.png'} alt='map'></img>
          </div>
        </seccion>
</section>
  )
}

export default Home