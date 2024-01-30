import Player from "./Player";
import { players } from "./Players";

function PlayersList() {
   return (
      players.map( elem => <Player  name={ elem.name}  age ={ elem.age} nationality={elem.nationality} 
                                    team={ elem.team}  jerseyNumber={elem.jerseyNumber}   
                                    urlImage={elem.urlImage }  />
  
                 )
        )
}   

export default PlayersList ;