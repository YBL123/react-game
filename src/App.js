import React from 'react'
// import { render } from 'node-sass'

class App extends React.Component {
  state = {
    grid: '.grid',
    gameWrapper: '.game-wrapper',
    cells: [],
    width: 9,
    cellCount: (this.width * this.width) + (this.width * 2)
  }


  componentDidMount() {
    this.initiateGame()
  }

  //* game initiation. When start button is clicked menu is hidden and game grid becomes visible - then game loads
  initiateGame = () => {
    // highScoreTable.style.display = 'none'
    // gameMenu.style.display = 'none'
    // gameWrapper.style.display = 'flex'
    // gameOver.style.display = 'none'
    // gameWon.style.display = 'none'
    // gameSounds = new Sounds()
    // gameSounds.playBackgroundSound()  //* play background sound
    this.startGame() //* Start Game function called here
  }

  // * Game Functions
  startGame = () => {
    this.createGrid()
    // style()
    // document.getElementById('player-lives').innerHTML = playerLives
    // document.getElementById('score-display').innerHTML = playerScore
    // // * Event listeners
    // window.addEventListener('keydown', handleKeyDown)
    // addPlayer('flareonIdle') //* adds player
    // loopGame() //* loops game
  }

  //* create grid function starts here
  //* creates grid and then cells
  createGrid = () => {
    for (let i = 0; i < this.cellCount; i++) {
      const cell = this.grid
      this.grid.appendChild(cell)
      this.cells.push(cell)
      cell.textContent = i //take out later
    }
  }


  render() {
    return (
      <div className="game-wrapper">
        <div className="grid">
          <div className="grid2"></div>
        </div>
      </div>
    )
  }
}



export default App
