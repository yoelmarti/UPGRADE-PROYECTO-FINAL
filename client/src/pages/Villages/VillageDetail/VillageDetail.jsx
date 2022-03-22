import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContextLogin } from "../../../contexts/UserContext/UserContextLogin";
// import Houses from './Houses/Houses'

const VillageDetail = () => {
  const { villageId } = useParams();
  const [villageDetail, setVillageDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user, token } = useContext(UserContextLogin);

  const [showHouses, setShowHouses] = useState(false);

  const [houseList, setHouseList] = useState([]);

  useEffect(() => {
    try {
      fetch(`http://localhost:4000/villages/${villageId}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setVillageDetail(data.data.village);
          setIsLoading(false);
        });
      try {
          fetch(`http://localhost:4000/villages/${villageId}/houses`, {
            method: "GET",
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((res) => {
            return res.json();
          })
        .then((data)=>{ 
          console.log(data.data);
          const pueblo = data.data.info[0].houses;
            setHouseList(pueblo);
        })
        
    } catch (error) {
        console.error(error)
    }
    } catch (error) {
      console.error(error);
    }
  }, [token, user, villageId]);

  const handleClick = () => {
    setShowHouses(!showHouses);
  };

  if (isLoading) {
    return <>Loading...</>;
  } else {
    return (
      <div>
        <div>
          <div className="min-w-screen drop-shadow-2xl">
            <p className="w-3/5 m-auto pl-[50px] pb-4 text-7xl text-[#481620]">
              {villageDetail.name}
            </p>
            <img
              className="w-full md:w-2/3 xl:w-3/5 m-auto"
              src={`http://localhost:4000/public' ${villageDetail.image}`}
              alt={villageDetail.name}
            />

            <div className="flex w-3/5 m-auto pt-4 pl-5">
              <img
                className="w-[22px]"
                src={`http://localhost:4000/public/location-icon.svg`}
                alt="location"
              />
              <span> {villageDetail.location.province},</span>
              <span className=" ml-3">{villageDetail.location.region}</span>
              <div className="flex pl-[550px]">
                <img
                  src={`http://localhost:4000/public/population-icon.svg`}
                  alt="Habitantes"
                />
                <span className="ml-4">{villageDetail.population}</span>
              </div>
            </div>

            <div className="flex md:w-3/5 m-auto text-center mt-[50px] md:flex-row">
              <div className="w-full md:w-2/4 my-auto ">
                <p className="text-2xl pb-10">Conoce {villageDetail.name}</p>
                <p className="text-jsutify tracking-wider">
                  {villageDetail.description}
                </p>
              </div>
              <div className="text-center  w-full md:w-2/4">
                <p className="text-2xl pb-10">Servicios</p>
                <div className="flex flex-col justify-center pl-[80px] text-xl">
                  {villageDetail.features.bar ? (
                    <div className="flex items-center mb-3">
                      <img
                        className="w-[40px] mr-10"
                        src={`http://localhost:4000/public/bar-icon.svg`}
                        alt="Bar"
                      />
                      <p>Bar</p>
                    </div>
                  ) : null}
                  {villageDetail.features.farmacy ? (
                    <div className="flex items-center mb-3">
                      <img
                        className="w-[40px] mr-10"
                        src={`http://localhost:4000/public/medico-icon.svg`}
                        alt="Farmacia"
                      />
                      <p>Farmacia</p>
                    </div>
                  ) : null}
                  {villageDetail.features.supermarket ? (
                    <div className="flex items-center mb-3">
                      <img
                        className="w-[40px] mr-10"
                        src={`http://localhost:4000/public/market-icon.svg`}
                        alt="Supermercado"
                      />
                      <p>Supermercado</p>
                    </div>
                  ) : null}
                  {villageDetail.features.doctor ? (
                    <div className="flex items-center">
                      <img
                        className="w-[40px] mr-10"
                        src={`http://localhost:4000/public/doctor-icon.svg`}
                        alt="Doctor"
                      />
                      <p>Médico</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-20">
            <Link to="https://kuartango.eus/" path="https://kuartango.eus/">
              {villageDetail.web}
            </Link>
          </div>
        </div>

        <div className="text-center pt-[80px]">
          <button
            className="w-[180px] h-[45px] rounded-full bg-[#4C6663] hover:bg-[#CC998D] font-normal text-white"
            onClick={handleClick}
          >
            ver casas
          </button>
        </div>
        <div className="pt-[50px] lg:pt-[80px] pb-10 lg:pb-20 text-[#481620] font-medium">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {user && showHouses
                ? houseList.map((house) => {
                    return (
                      <div className="p-4 sm:w-1/2 lg:w-1/3" key={house.refh}>
                        <div className="rounded-lg overflow-hidden mb-10 bg-[#CC998D] border-2 border-[#CC998D]">
                          <img
                            className="w-full h-[300px] rounded-b-lg"
                            src={`http://localhost:4000/public' ${house.image}`}
                            alt={`casa ${house.refh}`}
                          />
                          <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                            <div className="flex items-center">
                              <img
                                className="w-[30px]"
                                src={`http://localhost:4000/public/m2-icon.svg`}
                                alt="Metros cuadrados"
                              />
                              <span className="pl-6">
                                {house.meters} - Metros cuadrados
                              </span>
                            </div>
                            <div className="flex items-center">
                              <img
                                className="w-[30px]"
                                src={`http://localhost:4000/public/rooms-icon.svg`}
                                alt="Habitaciones"
                              />
                              <span className="pl-6">
                                {house.rooms} - Habitaciones
                              </span>
                            </div>
                            <div className="flex items-center">
                              <img
                                className="w-[30px]"
                                src={`http://localhost:4000/public/bath-icon.svg`}
                                alt="Baños"
                              />
                              <span className="pl-6">
                                {house.bathrooms} - Baños
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
            {!user && showHouses ? (
              <div>
                <p className="text-center">
                  Si quieres ver las casas disponibles tienes que{" "}
                  <Link to="/iniciar-sesion">Iniciar Sesion</Link>
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
};

export default VillageDetail;
