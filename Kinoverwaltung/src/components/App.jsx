import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { Home } from './Home'
import '../styles/global.css';
import { CreatePlayer } from './CreatePlayer';
import { TournamentList } from './TournamentList';
import { TournamentInformation } from './TournamentInformation';


export function App() {

  return (
    <BrowserRouter>
      <main>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/create-player/:fromView/" element={<CreatePlayer />}></Route>          
          <Route path="/tournament-list" element={<TournamentList />}></Route>
          <Route path="/tournament-information/" element={<TournamentInformation />}></Route>

        </Routes>
      </main>
    </BrowserRouter>
  );
}
