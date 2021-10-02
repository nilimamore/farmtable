import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class='mainContainer'>
      <div class='polyHouse'>
        <div class='nodeTitle'>PolyHouse</div>
        <div class='marginTop10'>
          <table id="tbl" cellPadding='5' cellSpacing='0'>
            <tr>
              <th>Sensor Addr</th>
              <th>Parameter</th>
              <th>Unit</th>
              <th>Time</th>
              <th>Value</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Temp - 1</td>
              <td>Deg C</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Temp - 2</td>
              <td>Deg C</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Temp - 3</td>
              <td>Deg C</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Lux</td>
              <td>Lux</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td>CO2</td>
              <td>ppm / %</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>

      <div class='nodeContainer'>
        <div class='nodeTitle'>Node 1</div>

        <div class='trayContainer marginTop10'>
          <div class='trayTitle'>Tray 1</div>
          <table id="tbl" cellPadding='5' cellSpacing='0'>
            <tr>
              <th>Sensor Addr</th>
              <th>Parameter</th>
              <th>Unit</th>
              <th>Time</th>
              <th>Value</th>
            </tr>
            <tr>
              <td>6</td>
              <td>pH</td>
              <td>-</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td rowSpan='2'>7</td>
              <td>EC - 1</td>
              <td>µS/cm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Moisture - 1</td>
              <td>% RH</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>

        <div class='trayContainer marginTop10'>
          <div class='trayTitle'>Tray 2</div>
          <table id="tbl" cellPadding='5' cellSpacing='0'>
            <tr>
              <th>Sensor Addr</th>
              <th>Parameter</th>
              <th>Unit</th>
              <th>Time</th>
              <th>Value</th>
            </tr>
            <tr>
              <td rowSpan='2'>8</td>
              <td>EC - 1</td>
              <td>µS/cm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Moisture - 1</td>
              <td>% RH</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>

        <div class='trayContainer marginTop10'>
          <div class='trayTitle'>Tray 3</div>
          <table id="tbl" cellPadding='5' cellSpacing='0'>
            <tr>
              <th>Sensor Addr</th>
              <th>Parameter</th>
              <th>Unit</th>
              <th>Time</th>
              <th>Value</th>
            </tr>
            <tr>
              <td rowSpan='2'>9</td>
              <td>EC - 1</td>
              <td>µS/cm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Moisture - 1</td>
              <td>% RH</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>

        <div class='clear'></div>

        <div class='trayContainer marginTop10'>
          <div class='trayTitle'>Tray 4</div>
          <table id="tbl" cellPadding='5' cellSpacing='0'>
            <tr>
              <th>Sensor Addr</th>
              <th>Parameter</th>
              <th>Unit</th>
              <th>Time</th>
              <th>Value</th>
            </tr>
            <tr>
              <td>10</td>
              <td>pH</td>
              <td>-</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td rowSpan='2'>11</td>
              <td>EC - 1</td>
              <td>µS/cm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Moisture - 1</td>
              <td>% RH</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>

        <div class='trayContainer marginTop10'>
          <div class='trayTitle'>Tray 5</div>
          <table id="tbl" cellPadding='5' cellSpacing='0'>
            <tr>
              <th>Sensor Addr</th>
              <th>Parameter</th>
              <th>Unit</th>
              <th>Time</th>
              <th>Value</th>
            </tr>
            <tr>
              <td rowSpan='2'>12</td>
              <td>EC - 1</td>
              <td>µS/cm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Moisture - 1</td>
              <td>% RH</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>

        <div class='trayContainer marginTop10'>
          <div class='trayTitle'>Tray 6</div>
          <table id="tbl" cellPadding='5' cellSpacing='0'>
            <tr>
              <th>Sensor Addr</th>
              <th>Parameter</th>
              <th>Unit</th>
              <th>Time</th>
              <th>Value</th>
            </tr>
            <tr>
              <td rowSpan='2'>13</td>
              <td>EC - 1</td>
              <td>µS/cm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Moisture - 1</td>
              <td>% RH</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>

        <div class='clear'></div>
        
        <div class='trayContainer marginTop10'>
          <div class='trayTitle'>Tray 7</div>
          <table id="tbl" cellPadding='5' cellSpacing='0'>
            <tr>
              <th>Sensor Addr</th>
              <th>Parameter</th>
              <th>Unit</th>
              <th>Time</th>
              <th>Value</th>
            </tr>
            <tr>
              <td>14</td>
              <td>pH</td>
              <td>-</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td rowSpan='2'>15</td>
              <td>EC - 1</td>
              <td>µS/cm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Moisture - 1</td>
              <td>% RH</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>

        <div class='trayContainer marginTop10'>
          <div class='trayTitle'>Tray 8</div>
          <table id="tbl" cellPadding='5' cellSpacing='0'>
            <tr>
              <th>Sensor Addr</th>
              <th>Parameter</th>
              <th>Unit</th>
              <th>Time</th>
              <th>Value</th>
            </tr>
            <tr>
              <td rowSpan='2'>16</td>
              <td>EC - 1</td>
              <td>µS/cm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Moisture - 1</td>
              <td>% RH</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>

        <div class='trayContainer marginTop10'>
          <div class='trayTitle'>Tray 9</div>
          <table id="tbl" cellPadding='5' cellSpacing='0'>
            <tr>
              <th>Sensor Addr</th>
              <th>Parameter</th>
              <th>Unit</th>
              <th>Time</th>
              <th>Value</th>
            </tr>
            <tr>
              <td rowSpan='2'>17</td>
              <td>EC - 1</td>
              <td>µS/cm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Moisture - 1</td>
              <td>% RH</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class='clear'></div>
      </div>
      <div class='nodeContainer marginTop10'>
        <div class='nodeTitle'>Node 2</div>

        <div class='trayContainer marginTop10'>
          <div class='trayTitle'>Tray 10</div>
          <table id="tbl" cellPadding='5' cellSpacing='0'>
            <tr>
              <th>Sensor Addr</th>
              <th>Parameter</th>
              <th>Unit</th>
              <th>Time</th>
              <th>Value</th>
            </tr>
            <tr>
              <td>18</td>
              <td>pH</td>
              <td>-</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td rowSpan='2'>19</td>
              <td>EC - 1</td>
              <td>µS/cm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Moisture - 1</td>
              <td>% RH</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>

        <div class='trayContainer marginTop10'>
          <div class='trayTitle'>Tray 11</div>
          <table id="tbl" cellPadding='5' cellSpacing='0'>
            <tr>
              <th>Sensor Addr</th>
              <th>Parameter</th>
              <th>Unit</th>
              <th>Time</th>
              <th>Value</th>
            </tr>
            <tr>
              <td rowSpan='2'>20</td>
              <td>EC - 1</td>
              <td>µS/cm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Moisture - 1</td>
              <td>% RH</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>

        <div class='trayContainer marginTop10'>
          <div class='trayTitle'>Tray 12</div>
          <table id="tbl" cellPadding='5' cellSpacing='0'>
            <tr>
              <th>Sensor Addr</th>
              <th>Parameter</th>
              <th>Unit</th>
              <th>Time</th>
              <th>Value</th>
            </tr>
            <tr>
              <td rowSpan='2'>21</td>
              <td>EC - 1</td>
              <td>µS/cm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Moisture - 1</td>
              <td>% RH</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>

        <div class='clear'></div>

        <div class='trayContainer marginTop10'>
          <div class='trayTitle'>Tray 13</div>
          <table id="tbl" cellPadding='5' cellSpacing='0'>
            <tr>
              <th>Sensor Addr</th>
              <th>Parameter</th>
              <th>Unit</th>
              <th>Time</th>
              <th>Value</th>
            </tr>
            <tr>
              <td>22</td>
              <td>pH</td>
              <td>-</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td rowSpan='2'>23</td>
              <td>EC - 1</td>
              <td>µS/cm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Moisture - 1</td>
              <td>% RH</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>

        <div class='trayContainer marginTop10'>
          <div class='trayTitle'>Tray 14</div>
          <table id="tbl" cellPadding='5' cellSpacing='0'>
            <tr>
              <th>Sensor Addr</th>
              <th>Parameter</th>
              <th>Unit</th>
              <th>Time</th>
              <th>Value</th>
            </tr>
            <tr>
              <td rowSpan='2'>24</td>
              <td>EC - 1</td>
              <td>µS/cm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Moisture - 1</td>
              <td>% RH</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>

        <div class='trayContainer marginTop10'>
          <div class='trayTitle'>Tray 15</div>
          <table id="tbl" cellPadding='5' cellSpacing='0'>
            <tr>
              <th>Sensor Addr</th>
              <th>Parameter</th>
              <th>Unit</th>
              <th>Time</th>
              <th>Value</th>
            </tr>
            <tr>
              <td rowSpan='2'>25</td>
              <td>EC - 1</td>
              <td>µS/cm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Moisture - 1</td>
              <td>% RH</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>

        <div class='clear'></div>
        
        <div class='trayContainer marginTop10'>
          <div class='trayTitle'>Tray 16</div>
          <table id="tbl" cellPadding='5' cellSpacing='0'>
            <tr>
              <th>Sensor Addr</th>
              <th>Parameter</th>
              <th>Unit</th>
              <th>Time</th>
              <th>Value</th>
            </tr>
            <tr>
              <td>26</td>
              <td>pH</td>
              <td>-</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td rowSpan='2'>27</td>
              <td>EC - 1</td>
              <td>µS/cm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Moisture - 1</td>
              <td>% RH</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>

        <div class='trayContainer marginTop10'>
          <div class='trayTitle'>Tray 17</div>
          <table id="tbl" cellPadding='5' cellSpacing='0'>
            <tr>
              <th>Sensor Addr</th>
              <th>Parameter</th>
              <th>Unit</th>
              <th>Time</th>
              <th>Value</th>
            </tr>
            <tr>
              <td rowSpan='2'>28</td>
              <td>EC - 1</td>
              <td>µS/cm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Moisture - 1</td>
              <td>% RH</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>

        <div class='trayContainer marginTop10'>
          <div class='trayTitle'>Tray 18</div>
          <table id="tbl" cellPadding='5' cellSpacing='0'>
            <tr>
              <th>Sensor Addr</th>
              <th>Parameter</th>
              <th>Unit</th>
              <th>Time</th>
              <th>Value</th>
            </tr>
            <tr>
              <td rowSpan='2'>29</td>
              <td>EC - 1</td>
              <td>µS/cm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Moisture - 1</td>
              <td>% RH</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class='clear'></div>
      </div>
    </div>
  );
}

export default App;
