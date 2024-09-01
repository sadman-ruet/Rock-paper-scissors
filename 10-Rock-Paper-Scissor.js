let gameScore=JSON.parse(localStorage.getItem('gameScore'));

        if (!gameScore) {
            gameScore = {
                win: 0,
                loss: 0,
                tie: 0
            }
        }

        updateScoreElement();

        let computerMove = "";
        function playGame(playerMove) {
            computerMove = showComputerMove();
            console.log(computerMove);
            let result = '';
            if (playerMove == 'Rock') {
                if (computerMove === 'Rock') {
                    result = 'Tie';
                }
                else if (computerMove === 'Paper') {
                    result = 'You Lose';
                }
                else if (computerMove === 'Scissors') {
                    result = 'You Win';
                }
            }
            else if (playerMove == 'Paper') {
                if (computerMove === 'Rock') {
                    result = 'You Win';
                }
                else if (computerMove === 'Paper') {
                    result = 'Tie';
                }
                else if (computerMove === 'Scissors') {
                    result = 'You Loss';
                }
            }
            else if (playerMove == 'Scissors') {
                if (computerMove === 'Rock') {
                    result = 'You Loss';
                }
                else if (computerMove === 'Paper') {
                    result = 'You Win';
                }
                else if (computerMove === 'Scissors') {
                    result = 'Tie';
                }
            }
            
            if(result=='You Win'){
                gameScore['win']++;
            }
            else if (result=='You Loss'){
                gameScore['loss']++;
            }
            else{
                gameScore['tie']++;
            }

            showResultElement(result)

            localStorage.setItem('gameScore', JSON.stringify(gameScore));

            updateScoreElement();
            showMoveItemElement(playerMove,computerMove);
        }
        function fetchMoveItemImage(moveName){
            if(moveName==='Rock'){
                return './images/rock-emoji.png';
            }
            else if(moveName==='Paper'){
                return './images/paper-emoji.png';
            }
            else if(moveName==='Scissors'){
                return './images/scissors-emoji.png';
            }
        }

        function showMoveItemElement(playerMove,computerMove){
            let moveImage =document.querySelector('.js-moves');
            moveImage.innerHTML=`You <img src=${fetchMoveItemImage(playerMove)} alt='${playerMove}' class='move-item '><img src=${fetchMoveItemImage(computerMove)} alt='${computerMove}' class='move-item '> Computer`;
        }

        function showResultElement(result){
            document.querySelector('.js-result').innerHTML=`${result}`;
        }
        function updateScoreElement(){
            document.querySelector('.js-score').innerHTML=`Win: ${gameScore['win']}, Loss: ${gameScore['loss']}, Tie: ${gameScore['tie']}`;
        }
        function showComputerMove() {
            randomNumber = Math.random();
            let computerMove = '';
            if (randomNumber >= 0 && randomNumber < 1 / 3) {
                computerMove = 'Rock';
            }
            else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                computerMove = 'Paper';
            }
            else {
                computerMove = 'Scissors';
            }
            return computerMove;
        }