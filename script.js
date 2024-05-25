var p_mainArray = new Array(8);
for (var i = 0; i < 8; i++)
    p_mainArray[i] = new Array(8);

document.getElementById('random8Button').onclick = function()
{
    p_reset();
    document.getElementById("buttons_2").style.opacity = "1";

    var queenCount;
    var line, column;
    var mainArray = new Array(8);
    for (var i = 0; i < 8; i++)
        mainArray[i] = new Array(8);

    do
    {
        queenCount = 0;
        for(var i = 0; i < 8; i++)
            for(var j = 0; j < 8; j++)
                mainArray[i][j] = 0;

        do
        {
            line = Math.floor(Math.random() * 8);
            column = Math.floor(Math.random() * 8);

            if(!mainArray[line][column])
            {      
                toPlace(line, column);
                queenCount++;
            }

        }
        while(isThatOver());
    }
    while(queenCount != 8);
        
    createTable();
    p_addTurnButtons();

    for(var i = 0; i < 8; i++)
        for(var j = 0; j < 8; j++)
            p_mainArray[i][j] = mainArray[i][j];

    function toPlace(line, column)
    {
        horizontal(line, 0);
        vertical(0, column);

        if(line > column)
            leftToRight((line - column), 0);
        else
            leftToRight(0, (column - line));
                    
        if((line + column) <= 8)
            rightToLeft(0, (line + column));
        else
            rightToLeft(((line + column + 1) % 8), 7);


        function horizontal(line, column)
        {
            if(column == 8)
                return;

            mainArray[line][column] = 1;
            horizontal(line, (column + 1));
        }
        function vertical(line, column)
        {
            if(line == 8)
                return;

            mainArray[line][column] = 1;
            vertical((line + 1), column);
        }
        function leftToRight(line, column)
        {
            if((line == 8) || (column == 8))
                return;

            mainArray[line][column] = 1;
            leftToRight((line + 1), (column + 1));
        }
        function rightToLeft(line, column)
        {
            if((line == 8) || (column == -1))
                return;

            mainArray[line][column] = 1;
            rightToLeft((line + 1), (column - 1));
        }

        mainArray[line][column] = 2;
    }

    function isThatOver()
    {
        for(var i = 0; i < 8; i++)
            for(var j = 0; j < 8; j++)
                if(mainArray[i][j] == 0)
                    return 1;

        return 0;
    }

    function createTable()
    {
        var output = '<table border = "2" cellspacing = "1" cellpadding = "8" class = "table">';
        for(var i = 0; i < 8; i++)
        {
            output = output + '<tr>';

            for(var j = 0; j < 8; j++)
                if(!((i + j) % 2))
                    output = output + '<td bgcolor = "#f0d9b5">' + tableQueen(i, j) + '</td>';
                else
                    output = output + '<td bgcolor = "#b58863">' + tableQueen(i, j) + '</td>';
            output = output + '</tr>';
        }

        output = output + '</table>';

        document.getElementById('container').innerHTML=output;

        function tableQueen(i, j)
        {
            if(mainArray[i][j] == 2)
                return '<img src = "images/whiteQueen.png"/>';
            else if(!((i + j) % 2))
                return '<img src = "images/emptyLight.png"/>';
            else
                return '<img src = "images/emptyDark.png"/>';
        }
    }
}
document.getElementById('random7Button').onclick = function()
{
    p_reset();
    document.getElementById("buttons_2").style.opacity = "1";

    var queenCount;
    var line, column;
    var mainArray = new Array(8);
    for (var i = 0; i < 8; i++)
        mainArray[i] = new Array(8);

    do
    {
        queenCount = 0;
        for(var i = 0; i < 8; i++)
            for(var j = 0; j < 8; j++)
                mainArray[i][j] = 0;

        do
        {
            line = Math.floor(Math.random() * 8);
            column = Math.floor(Math.random() * 8);

            if(!mainArray[line][column])
            {      
                toPlace(line, column);
                queenCount++;
            }

        }
        while(isThatOver());
    }
    while(queenCount != 7);
        
    createTable();
    p_addTurnButtons();

    for(var i = 0; i < 8; i++)
        for(var j = 0; j < 8; j++)
            p_mainArray[i][j] = mainArray[i][j];

    function toPlace(line, column)
    {
        horizontal(line, 0);
        vertical(0, column);

        if(line > column)
            leftToRight((line - column), 0);
        else
            leftToRight(0, (column - line));
                    
        if((line + column) <= 8)
            rightToLeft(0, (line + column));
        else
            rightToLeft(((line + column + 1) % 8), 7);


        function horizontal(line, column)
        {
            if(column == 8)
                return;

            mainArray[line][column] = 1;
            horizontal(line, (column + 1));
        }
        function vertical(line, column)
        {
            if(line == 8)
                return;

            mainArray[line][column] = 1;
            vertical((line + 1), column);
        }
        function leftToRight(line, column)
        {
            if((line == 8) || (column == 8))
                return;

            mainArray[line][column] = 1;
            leftToRight((line + 1), (column + 1));
        }
        function rightToLeft(line, column)
        {
            if((line == 8) || (column == -1))
                return;

            mainArray[line][column] = 1;
            rightToLeft((line + 1), (column - 1));
        }

        mainArray[line][column] = 2;
    }

    function isThatOver()
    {
        for(var i = 0; i < 8; i++)
            for(var j = 0; j < 8; j++)
                if(mainArray[i][j] == 0)
                    return 1;

        return 0;
    }

    function createTable()
    {
        var output = '<table border = "2" cellspacing = "1" cellpadding = "8" class = "table">';
        for(var i = 0; i < 8; i++)
        {
            output = output + '<tr>';

            for(var j = 0; j < 8; j++)
                if(!((i + j) % 2))
                    output = output + '<td bgcolor = "#f0d9b5">' + tableQueen(i, j) + '</td>';
                else
                    output = output + '<td bgcolor = "#b58863">' + tableQueen(i, j) + '</td>';
            output = output + '</tr>';
        }

        output = output + '</table>';

        document.getElementById('container').innerHTML=output;

        function tableQueen(i, j)
        {
            if(mainArray[i][j] == 2)
                return '<img src = "images/whiteQueen.png"/>';
            else if(!((i + j) % 2))
                return '<img src = "images/emptyLight.png"/>';
            else
                return '<img src = "images/emptyDark.png"/>';
        }
    }
}
document.getElementById('random6Button').onclick = function()
{
    p_reset();
    document.getElementById("buttons_2").style.opacity = "1";

    var queenCount;
    var line, column;
    var mainArray = new Array(8);
    for (var i = 0; i < 8; i++)
        mainArray[i] = new Array(8);

    do
    {
        queenCount = 0;
        for(var i = 0; i < 8; i++)
            for(var j = 0; j < 8; j++)
                mainArray[i][j] = 0;

        do
        {
            line = Math.floor(Math.random() * 8);
            column = Math.floor(Math.random() * 8);

            if(!mainArray[line][column])
            {      
                toPlace(line, column);
                queenCount++;
            }

        }
        while(isThatOver());
    }
    while(queenCount != 6);
        
    createTable();
    p_addTurnButtons();

    for(var i = 0; i < 8; i++)
        for(var j = 0; j < 8; j++)
            p_mainArray[i][j] = mainArray[i][j];

    function toPlace(line, column)
    {
        horizontal(line, 0);
        vertical(0, column);

        if(line > column)
            leftToRight((line - column), 0);
        else
            leftToRight(0, (column - line));
                    
        if((line + column) <= 8)
            rightToLeft(0, (line + column));
        else
            rightToLeft(((line + column + 1) % 8), 7);


        function horizontal(line, column)
        {
            if(column == 8)
                return;

            mainArray[line][column] = 1;
            horizontal(line, (column + 1));
        }
        function vertical(line, column)
        {
            if(line == 8)
                return;

            mainArray[line][column] = 1;
            vertical((line + 1), column);
        }
        function leftToRight(line, column)
        {
            if((line == 8) || (column == 8))
                return;

            mainArray[line][column] = 1;
            leftToRight((line + 1), (column + 1));
        }
        function rightToLeft(line, column)
        {
            if((line == 8) || (column == -1))
                return;

            mainArray[line][column] = 1;
            rightToLeft((line + 1), (column - 1));
        }

        mainArray[line][column] = 2;
    }

    function isThatOver()
    {
        for(var i = 0; i < 8; i++)
            for(var j = 0; j < 8; j++)
                if(mainArray[i][j] == 0)
                    return 1;

        return 0;
    }

    function createTable()
    {
        var output = '<table border = "2" cellspacing = "1" cellpadding = "8" class = "table">';
        for(var i = 0; i < 8; i++)
        {
            output = output + '<tr>';

            for(var j = 0; j < 8; j++)
                if(!((i + j) % 2))
                    output = output + '<td bgcolor = "#f0d9b5">' + tableQueen(i, j) + '</td>';
                else
                    output = output + '<td bgcolor = "#b58863">' + tableQueen(i, j) + '</td>';
            output = output + '</tr>';
        }

        output = output + '</table>';

        document.getElementById('container').innerHTML=output;

        function tableQueen(i, j)
        {
            if(mainArray[i][j] == 2)
                return '<img src = "images/whiteQueen.png"/>';
            else if(!((i + j) % 2))
                return '<img src = "images/emptyLight.png"/>';
            else
                return '<img src = "images/emptyDark.png"/>';
        }
    }
}
document.getElementById('random5Button').onclick = function()
{
    p_reset();
    document.getElementById("buttons_2").style.opacity = "1";

    var queenCount;
    var line, column;
    var mainArray = new Array(8);
    for (var i = 0; i < 8; i++)
        mainArray[i] = new Array(8);

    do
    {
        queenCount = 0;
        for(var i = 0; i < 8; i++)
            for(var j = 0; j < 8; j++)
                mainArray[i][j] = 0;

        do
        {
            line = Math.floor(Math.random() * 8);
            column = Math.floor(Math.random() * 8);

            if(!mainArray[line][column])
            {      
                toPlace(line, column);
                queenCount++;
            }

        }
        while(isThatOver());
    }
    while(queenCount != 5);
        
    createTable();
    p_addTurnButtons();

    for(var i = 0; i < 8; i++)
        for(var j = 0; j < 8; j++)
            p_mainArray[i][j] = mainArray[i][j];

    function toPlace(line, column)
    {
        horizontal(line, 0);
        vertical(0, column);

        if(line > column)
            leftToRight((line - column), 0);
        else
            leftToRight(0, (column - line));
                    
        if((line + column) <= 8)
            rightToLeft(0, (line + column));
        else
            rightToLeft(((line + column + 1) % 8), 7);


        function horizontal(line, column)
        {
            if(column == 8)
                return;

            mainArray[line][column] = 1;
            horizontal(line, (column + 1));
        }
        function vertical(line, column)
        {
            if(line == 8)
                return;

            mainArray[line][column] = 1;
            vertical((line + 1), column);
        }
        function leftToRight(line, column)
        {
            if((line == 8) || (column == 8))
                return;

            mainArray[line][column] = 1;
            leftToRight((line + 1), (column + 1));
        }
        function rightToLeft(line, column)
        {
            if((line == 8) || (column == -1))
                return;

            mainArray[line][column] = 1;
            rightToLeft((line + 1), (column - 1));
        }

        mainArray[line][column] = 2;
    }

    function isThatOver()
    {
        for(var i = 0; i < 8; i++)
            for(var j = 0; j < 8; j++)
                if(mainArray[i][j] == 0)
                    return 1;

        return 0;
    }

    function createTable()
    {
        var output = '<table border = "2" cellspacing = "1" cellpadding = "8" class = "table">';
        for(var i = 0; i < 8; i++)
        {
            output = output + '<tr>';

            for(var j = 0; j < 8; j++)
                if(!((i + j) % 2))
                    output = output + '<td bgcolor = "#f0d9b5">' + tableQueen(i, j) + '</td>';
                else
                    output = output + '<td bgcolor = "#b58863">' + tableQueen(i, j) + '</td>';
            output = output + '</tr>';
        }

        output = output + '</table>';

        document.getElementById('container').innerHTML=output;

        function tableQueen(i, j)
        {
            if(mainArray[i][j] == 2)
                return '<img src = "images/whiteQueen.png"/>';
            else if(!((i + j) % 2))
                return '<img src = "images/emptyLight.png"/>';
            else
                return '<img src = "images/emptyDark.png"/>';
        }
    }
}
document.getElementById('minQueenButton').onclick = function()
{
    p_reset();
    document.getElementById("buttons_2").style.opacity = "1";

    var mainArray = new Array(8);
    for (var i = 0; i < 8; i++)
    {
        mainArray[i] = new Array(8);

        for(var j = 0; j < 8; j++)
            mainArray[i][j] = 0;
    }
    
    for(var i = 0; i < 8; i++)
        for(var j = 0; j < 8; j++)
            if(!mainArray[i][j])
                toPlace(i, j);

    createTable();
    p_addTurnButtons();

    for(var i = 0; i < 8; i++)
        for(var j = 0; j < 8; j++)
            p_mainArray[i][j] = mainArray[i][j];

    function toPlace(line, column)
    {
        horizontal(line, 0);
        vertical(0, column);

        if(line > column)
            leftToRight((line - column), 0);
        else
            leftToRight(0, (column - line));
                    
        if((line + column) <= 8)
            rightToLeft(0, (line + column));
        else
            rightToLeft(((line + column + 1) % 8), 7);


        function horizontal(line, column)
        {
            if(column == 8)
                return;

            mainArray[line][column] = 1;
            horizontal(line, (column + 1));
        }
        function vertical(line, column)
        {
            if(line == 8)
                return;

            mainArray[line][column] = 1;
            vertical((line + 1), column);
        }
        function leftToRight(line, column)
        {
            if((line == 8) || (column == 8))
                return;

            mainArray[line][column] = 1;
            leftToRight((line + 1), (column + 1));
        }
        function rightToLeft(line, column)
        {
            if((line == 8) || (column == -1))
                return;

            mainArray[line][column] = 1;
            rightToLeft((line + 1), (column - 1));
        }

        mainArray[line][column] = 2;
    }

    function createTable()
    {
        var output = '<table border = "2" cellspacing = "1" cellpadding = "8" class = "table">';
        for(var i = 0; i < 8; i++)
        {
            output = output + '<tr>';

            for(var j = 0; j < 8; j++)
                if(!((i + j) % 2))
                    output = output + '<td bgcolor = "#f0d9b5">' + tableQueen(i, j) + '</td>';
                else
                    output = output + '<td bgcolor = "#b58863">' + tableQueen(i, j) + '</td>';
            output = output + '</tr>';
        }

        output = output + '</table>';

        document.getElementById('container').innerHTML=output;

        function tableQueen(i, j)
        {
            if(mainArray[i][j] == 2)
                return '<img src = "images/whiteQueen.png"/>';
            else if(!((i + j) % 2))
                return '<img src = "images/emptyLight.png"/>';
            else
                return '<img src = "images/emptyDark.png"/>';
        }
    }
}      
document.getElementById('maxQueenButton').onclick = function()
{
    p_reset();
    document.getElementById("buttons_2").style.opacity = "1";

    var mainArray = new Array(8);
    for (var i = 0; i < 8; i++)
    {
        mainArray[i] = new Array(8);

        for(var j = 0; j < 8; j++)
            if(((i >= 2) && (i <= 5) && (j >= 2) && (j <= 5)) 
            || ((i < 2) && (j < 2))
            || ((i > 5) && (j > 5))
            || ((i < 2) && (j > 5))
            || ((i > 5) && (j < 2)))
                mainArray[i][j] = 1;
            else
                mainArray[i][j] = 0;
    }

    for(var i = 0; i < 4; i++)
    {
        for(var j = 0; j < 4; j++)
        {
            for(var k = 0; k < 8; k++)
            {
                if(mainArray[j][k] == 0)
                {
                    toPlace(j, k);
                    j = 20;
                    k = 20;
                }
            }
        }

        for(var j = 7; j > 3; j--)
        {
            for(var k = 7; k > -1; k--)
            {
                if(mainArray[j][k] == 0)
                {
                    toPlace(j, k);
                    j = -20;
                    k = -20;
                }
            }
        }
    }

    createTable();
    p_addTurnButtons();

    for(var i = 0; i < 8; i++)
        for(var j = 0; j < 8; j++)
            p_mainArray[i][j] = mainArray[i][j];

    function toPlace(line, column)
    {
        horizontal(line, 0);
        vertical(0, column);

        if(line > column)
            leftToRight((line - column), 0);
        else
            leftToRight(0, (column - line));
                    
        if((line + column) <= 8)
            rightToLeft(0, (line + column));
        else
            rightToLeft(((line + column + 1) % 8), 7);


        function horizontal(line, column)
        {
            if(column == 8)
                return;

            mainArray[line][column] = 1;
            horizontal(line, (column + 1));
        }
        function vertical(line, column)
        {
            if(line == 8)
                return;

            mainArray[line][column] = 1;
            vertical((line + 1), column);
        }
        function leftToRight(line, column)
        {
            if((line == 8) || (column == 8))
                return;

            mainArray[line][column] = 1;
            leftToRight((line + 1), (column + 1));
        }
        function rightToLeft(line, column)
        {
            if((line == 8) || (column == -1))
                return;

            mainArray[line][column] = 1;
            rightToLeft((line + 1), (column - 1));
        }

        mainArray[line][column] = 2;
    }

    function createTable()
    {
        var output = '<table border = "2" cellspacing = "1" cellpadding = "8" class = "table">';
        for(var i = 0; i < 8; i++)
        {
            output = output + '<tr>';

            for(var j = 0; j < 8; j++)
                if(!((i + j) % 2))
                    output = output + '<td bgcolor = "#f0d9b5">' + tableQueen(i, j) + '</td>';
                else
                    output = output + '<td bgcolor = "#b58863">' + tableQueen(i, j) + '</td>';
            output = output + '</tr>';
        }

        output = output + '</table>';

        document.getElementById('container').innerHTML=output;

        function tableQueen(i, j)
        {
            if(mainArray[i][j] == 2)
                return '<img src = "images/whiteQueen.png"/>';
            else if(!((i + j) % 2))
                return '<img src = "images/emptyLight.png"/>';
            else
                return '<img src = "images/emptyDark.png"/>';
        }
    }
}
document.getElementById('freeButton').onclick = function()
{
    p_reset();
    document.getElementById("buttons_2").style.opacity = "0";
    
    var mainArray = new Array(8);
    for (var i = 0; i < 8; i++)
        mainArray[i] = new Array(8);

    reset();

    createTable();

    function createTable()
    {
        var output = '<table width="555" height="555" border = "2" cellspacing = "1" cellpadding = "8" class = "table">';
        for(var i = 0; i < 8; i++)
        {
            output = output + '<tr>';

            for(var j = 0; j < 8; j++)
                if(!((i + j) % 2))
                    output = output + '<td bgcolor = "#f0d9b5">' + '<button onclick = "p_chessClick(this, this.id)" id = "' + i + j + '">QUEEN</button><button style="width: 63px" onclick = "p_redClick(this, this.id)" id = "' + i + j + '">RED</button>' + '</td>';
                else
                    output = output + '<td bgcolor = "#b58863">' + '<button onclick = "p_chessClick(this, this.id)" id = "' + i + j + '">QUEEN</button><button style="width: 63px" onclick = "p_redClick(this, this.id)" id = "' + i + j + '">RED</button>' + '</td>';
            output = output + '</tr>';
        }

        output = output + '</table>';

        document.getElementById('container').innerHTML=output;

        function tableQueen(i, j)
        {
            if(mainArray[i][j] == 2)
                return '<img src = "images/whiteQueen.png"/>';
            else if(!((i + j) % 2))
                return '<img src = "images/emptyLight.png"/>';
            else
                return '<img src = "images/emptyDark.png"/>';
        }
    }

    function reset()
    {
        for(var i = 0; i < 8; i++)
            for(var j = 0; j < 8; j++)
                mainArray[i][j] = 0;
    }
}

function p_chessClick(btn, id)
{
    var x = parseInt(id / 10);
    var y = parseInt(id % 10);

    p_toPlace(x, y);
    btn.remove();
    createTable(x, y);

    function p_toPlace(line, column)
    {
        horizontal(line, 0);
        vertical(0, column);

        if(line > column)
            leftToRight((line - column), 0);
        else
            leftToRight(0, (column - line));
                        
        if((line + column) <= 8)
            rightToLeft(0, (line + column));
        else
            rightToLeft(((line + column + 1) % 8), 7);


        function horizontal(line, column)
        {
            if(column == 8)
                return;

            p_mainArray[line][column] = 1;
            horizontal(line, (column + 1));
        }
        function vertical(line, column)
        {
            if(line == 8)
                return;

            p_mainArray[line][column] = 1;
            vertical((line + 1), column);
        }
        function leftToRight(line, column)
        {
            if((line == 8) || (column == 8))
                return;

            p_mainArray[line][column] = 1;
            leftToRight((line + 1), (column + 1));
        }
        function rightToLeft(line, column)
        {
            if((line == 8) || (column == -1))
                return;

            p_mainArray[line][column] = 1;
            rightToLeft((line + 1), (column - 1));
        }

        p_mainArray[line][column] = 2;
    }

    function createTable(x, y)
    {
        var output = '<table border = "2" cellspacing = "1" cellpadding = "8" class = "table">';
        for(var i = 0; i < 8; i++)
        {
            output = output + '<tr>';

            for(var j = 0; j < 8; j++)
                if(!((i + j) % 2))
                    output = output + '<td bgcolor = "#f0d9b5">' + tableQueen(i, j) + '</td>';
                else
                    output = output + '<td bgcolor = "#b58863">' + tableQueen(i, j) + '</td>';
            output = output + '</tr>';
        }

        output = output + '</table>';

        document.getElementById('container').innerHTML=output;

        function tableQueen(i, j)
        {
            if(p_mainArray[i][j] == 2)
                return '<img src = "images/whiteQueen.png"/>';
            else if(p_mainArray[i][j] == 1)
                return '<img src = "images/emptyRed.png"/>';
            else
                return '<button onclick = "p_chessClick(this, this.id)" id = "' + i + j + '">QUEEN</button><br><button style="width: 63px" onclick = "p_redClick(this, this.id)" id = "' + i + j + '">RED</button>';
        }
    }
}

function p_redClick(btn, id)
{
    var x = parseInt(id / 10);
    var y = parseInt(id % 10);

    p_mainArray[x][y] = 1;
    btn.remove();
    createTable(x, y);

    function createTable(x, y)
    {
        var output = '<table border = "2" cellspacing = "1" cellpadding = "8" class = "table">';
        for(var i = 0; i < 8; i++)
        {
            output = output + '<tr>';

            for(var j = 0; j < 8; j++)
                if(!((i + j) % 2))
                    output = output + '<td bgcolor = "#f0d9b5">' + tableQueen(i, j) + '</td>';
                else
                    output = output + '<td bgcolor = "#b58863">' + tableQueen(i, j) + '</td>';
            output = output + '</tr>';
        }

        output = output + '</table>';

        document.getElementById('container').innerHTML=output;

        function tableQueen(i, j)
        {
            if(p_mainArray[i][j] == 2)
                return '<img src = "images/whiteQueen.png"/>';
            else if(p_mainArray[i][j] == 1)
                return '<img src = "images/emptyRed.png"/>';
            else
                return '<button onclick = "p_chessClick(this, this.id)" id = "' + i + j + '">QUEEN</button><br><button style="width: 63px" onclick = "p_redClick(this, this.id)" id = "' + i + j + '">RED</button>';
        }
    }
}

function p_reset()
{
    for(var i = 0; i < 8; i++)
        for(var j = 0; j < 8; j++)
            p_mainArray[i][j] = 0;
}

function p_addTurnButtons()
{
    var output_2 = '<button onclick = "p_turnClick(this.id)" style="height: 100px; width: 100px" id=' + 1 + '><img src = "images/turnLeft.png"/></button>';
    output_2 = output_2 + '<button onclick = "p_turnClick(this.id)" style="height: 100px; width: 100px" id=' + 2 + '><img src = "images/turnRight.png"/></button>';

    document.getElementById('buttons_2').innerHTML=output_2;    
}

function p_turnClick(id)
{
    var temp, count = 0;
    if(id % 2)
    {
        do
        {
            for (var i = 0; i < 4; i++)
            {
                for (var j = i; j < (7 - i); j++)
                {
                    temp = p_mainArray[i][j];
                    p_mainArray[i][j] = p_mainArray[7 - j][i];
                    p_mainArray[7 - j][i] = p_mainArray[7 - i][7 - j];
                    p_mainArray[7 - i][7 - j] = p_mainArray[j][7 - i];
                    p_mainArray[j][7 - i] = temp;
                }
            }

            count++;
        }
        while(count != 3);
        
    }
    else
    {
        for (var i = 0; i < 4; i++)
        {
            for (var j = i; j < (7 - i); j++)
            {
                temp = p_mainArray[i][j];
                p_mainArray[i][j] = p_mainArray[7 - j][i];
                p_mainArray[7 - j][i] = p_mainArray[7 - i][7 - j];
                p_mainArray[7 - i][7 - j] = p_mainArray[j][7 - i];
                p_mainArray[j][7 - i] = temp;
            }
        }
    }

    createTable();



    function createTable()
    {
        var output = '<table border = "2" cellspacing = "1" cellpadding = "8" class = "table">';
        for(var i = 0; i < 8; i++)
        {
            output = output + '<tr>';

            for(var j = 0; j < 8; j++)
                if(!((i + j) % 2))
                    output = output + '<td bgcolor = "#f0d9b5">' + tableQueen(i, j) + '</td>';
                else
                    output = output + '<td bgcolor = "#b58863">' + tableQueen(i, j) + '</td>';
            output = output + '</tr>';
        }

        output = output + '</table>';

        document.getElementById('container').innerHTML=output;

        function tableQueen(i, j)
        {
            if(p_mainArray[i][j] == 2)
                return '<img src = "images/whiteQueen.png"/>';
            else if(!((i + j) % 2))
                return '<img src = "images/emptyLight.png"/>';
            else
                return '<img src = "images/emptyDark.png"/>';
        }
    }
}