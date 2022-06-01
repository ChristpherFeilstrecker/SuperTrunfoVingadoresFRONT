import "./styledRouter.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BattlePhase from "../pages/BattlePhase/BattlePhase";
import IntroPage from "../pages/IntroPage/IntroPage";
import SelectAtribut from "../pages/SelectAtribut/SelectAtribut";
import useRequestData from "../components/Hooks/useRequestData";
import { BASE_URL } from "../components/constants/BaseURL"
import WinnerPage from "../pages/WinnerPage/WinnerPage";
import LoserPage from "../pages/LoserPage/LoserPage";
import InstructionsPage from "../pages/InstructionsPage/InstructionsPage";
import SortPage from "../pages/sort/SortPage";
import BaseboardPage from "../pages/Baseboard/BaseboardPage";
import logo from "../components/images/Style/logovingadores.png"

export const Router = () => {
  const [splash, setSplash] = useState(false)
  const [cards, setCards] = useState([])
  const [attribut, setAttribut] = useState("?")
  const [turn, setTurn] = useState("jogador")


  useEffect(() => {
    const data = localStorage.getItem('cards')
    if (data) {
      setCards(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards])

  useEffect(() => {
    const data = localStorage.getItem('turn')
    if (data) {
      setTurn(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    setSplash(false)
    setTimeout(() => {
      setSplash(false)
    }, 4000)
  }, [])

  return (
    <BrowserRouter>
    {splash?
  <div className='splash-screm'><img className="image-splash" src={logo} alt="caneca" /></div>
    :
      <Routes>
        <Route exact path={"/"} element={<IntroPage cards={cards} setCards={setCards} />} />
        <Route exact path={"/sorteio"} element={<SortPage turn={turn} setTurn={setTurn} />} />
        <Route exact path={"/select"} element={<SelectAtribut cards={cards} setCards={setCards} attribut={attribut} setAttribut={setAttribut} turn={turn} setTurn={setTurn} />} />
        <Route exact path={"/battle"} element={<BattlePhase cards={cards} setCards={setCards} attribut={attribut} setAttribut={setAttribut} setTurn={setTurn} turn={turn} />} />
        <Route exact path={"/winner"} element={<WinnerPage setAttribut={setAttribut} />} />
        <Route exact path={"/loser"} element={<LoserPage setAttribut={setAttribut} />} />
        <Route exact path={"/instructions"} element={<InstructionsPage />} />
      </Routes>
      
    }
    {/*<BaseboardPage/>*/}
    </BrowserRouter>
  )

}