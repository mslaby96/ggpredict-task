import { IPlayer } from "../shared/models";
import ReactCountryFlag from "react-country-flag";

import Logo from "../assets/logo.png";

const PlayerTable = ({ players }: { players: any }) => {
  const currentDate = new Date();
  return (
    <table className="w-full table-auto">
      <thead>
        <tr className="text-slate-600 border-b-2 border-slate-600 border-opacity-20">
          <th> </th>
          <th className="font-thin text-left px-2">NAME</th>
          <th className="font-thin text-left">NICK</th>
          <th className="font-thin">AGE</th>
          <th className="font-thin">COUNTRY</th>
          <th className="w-16"></th>
          <th className="font-thin text-green-500">WON</th>
          <th className="font-thin">DRAWN</th>
          <th className="font-thin text-red-500">LOST</th>
        </tr>
      </thead>
      <tbody>
        {players.data ? (
          players.data.content.map((player: IPlayer) => (
            <tr
              className="text-white text-xs border-b-2 border-slate-600 border-opacity-20"
              key={player.id}
            >
              <td className="border-r-2 border-slate-600 border-opacity-20 align-middle">
                <div className="h-1/2 flex justify-center">
                  <img src={Logo} className="w-5 h-5" />
                </div>
              </td>
              <td className="text-left py-3 px-2">
                {player.name.split(" ")[0]}
              </td>
              <td className="text-left">{player.nick}</td>
              <td>{currentDate.getFullYear() - player.birthYear}</td>
              <td className="text-center">
                <ReactCountryFlag
                  className="text-lg"
                  countryCode={player.country}
                  svg
                />
              </td>
              <td></td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          ))
        ) : (
          <div className="w-full text-white flex justify-center">
            <h1>No Results</h1>
          </div>
        )}
      </tbody>
    </table>
  );
};

export default PlayerTable;
