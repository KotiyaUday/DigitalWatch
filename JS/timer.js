let h = 0;
    let m = 0;
    let s = 0;
    let intervalId;

    function getData()
    {
        // document.getElementById("audio").play();
        h = parseInt(prompt("Enter the Hour \n(If you want to set hour to zero(0) please enter zero(0)) :"));
        m = parseInt(prompt("Enter the Minute \n(If you want to set minute to zero(0) please enter zero(0)) : "));
        s = parseInt(prompt("Enter the Second \n(If you want to set second to zero(0) please enter zero(0)) : "));

        if((h == 0 && m == 0 && s == 0) || (h == '' && m == '' && s == '') || (h == null && m == null && s == null))
        {
            h = m = s = 0;
        }
        else{
            document.getElementById("start").disabled = false;
            document.getElementById("start").style.borderColor =  'white';
            document.getElementById("start").style.color =  'white';
            document.getElementById("start").style.pointerEvents = 'auto';
        }

        while(s >= 60)
        {
            s -= 60;
            m += 1;
        }

        while(m >= 60)
        {
            m -= 60;
            h += 1;
        }

        print();
    }

    function set() {

        document.getElementById("restart").disabled = true;
        document.getElementById("restart").style.borderColor =  'gray';
        document.getElementById("restart").style.color =  'gray';
        document.getElementById("restart").style.pointerEvents = 'none';

        document.getElementById("stop").disabled = true;
        document.getElementById("stop").style.borderColor =  'gray';
        document.getElementById("stop").style.color =  'gray';
        document.getElementById("stop").style.pointerEvents = 'none';

        document.getElementById("start").disabled = true;
        document.getElementById("start").style.borderColor =  'gray';
        document.getElementById("start").style.color =  'gray';
        document.getElementById("start").style.pointerEvents = 'none';

        document.getElementById("set").disabled = false;
        document.getElementById("set").style.borderColor =  'white';
        document.getElementById("set").style.color =  'white';
        document.getElementById("set").style.pointerEvents = 'auto';

        setTimeout(() => {
            document.getElementById("load").style.display = 'none';
            document.getElementById("main").style.display = 'flex';
            document.getElementById("header").style.display = 'flex';
            /*
                Below Code Use for access Elsements using class name
                let buttons = document.getElementsByClassName("btn");
                for(let i = 0 ; i <= buttons.length ; i++)
                {
                    buttons[i].style.display='flex';
                }
            */
        }, 1000);
    }

    function start()
    {
        document.getElementById("start").disabled = true;
        document.getElementById("start").style.borderColor =  'gray';
        document.getElementById("start").style.color =  'gray';
        document.getElementById("start").style.pointerEvents = 'none';

        document.getElementById("restart").disabled = false;
        document.getElementById("restart").style.borderColor =  'white';
        document.getElementById("restart").style.color =  'white';
        document.getElementById("restart").style.pointerEvents = 'auto';

        document.getElementById("stop").disabled = false;
        document.getElementById("stop").style.borderColor =  'white';
        document.getElementById("stop").style.color =  'white';
        document.getElementById("stop").style.pointerEvents = 'auto';

        document.getElementById("set").disabled = true;
        document.getElementById("set").style.borderColor =  'gray';
        document.getElementById("set").style.color =  'gray';
        document.getElementById("set").style.pointerEvents = 'none';

        updateTime();
    }

    function reso(difined) 
    {

        document.getElementById("stop").disabled = true;
        document.getElementById("stop").style.borderColor =  'gray';
        document.getElementById("stop").style.color =  'gray';
        document.getElementById("stop").style.pointerEvents = 'none';

        document.getElementById("start").disabled = false;
        document.getElementById("start").style.borderColor =  'white';
        document.getElementById("start").style.color =  'white';
        document.getElementById("start").style.pointerEvents = 'auto';

        clearInterval(intervalId);
        if(difined == 1)
        {
            document.getElementById("restart").disabled = true;
            document.getElementById("restart").style.borderColor =  'gray';
            document.getElementById("restart").style.color =  'gray';
            document.getElementById("restart").style.pointerEvents = 'none';

            document.getElementById("set").disabled = false;
            document.getElementById("set").style.borderColor =  'white';
            document.getElementById("set").style.color =  'white';
            document.getElementById("set").style.pointerEvents = 'auto';

            document.getElementById("start").disabled = true;
            document.getElementById("start").style.borderColor =  'gray';
            document.getElementById("start").style.color =  'gray';
            document.getElementById("start").style.pointerEvents = 'none';

            document.getElementById("hm").innerText = '00:00:00';
        }
    }

    function updateTime()
    {
        intervalId = setInterval(()=>{
            if(s >= 1)
            {
                s -= 1;
                if(s <= 10 && m == 0 && h == 0)
                {
                    document.getElementById("hm").style.color = 'red';   
                }
            }
            else{
                if(m >= 1)
                {
                    m -= 1;
                    s = 60;
                }
                else{
                    if(h >= 1)
                    {
                        h -= 1;
                        m = 60;
                    }
                }
            }

            print();

            if(h <= 0 && m <= 0 && s <= 0)
            {
                clearInterval(intervalId);

                document.getElementById("audio").loop = true;
                document.getElementById("audio").play();

                document.getElementById("up").style.display = 'flex';
                document.getElementById("main").style.display = 'none';
                document.getElementById("header").style.display = 'none';
                document.querySelector(':root').style.setProperty('--bg', 'white');
            }
            
        },1000);
    }

    function reset()
    {
        document.getElementById("audio").pause();
        document.getElementById("up").style.display = 'none';
        document.getElementById("main").style.display = 'flex';
        document.getElementById("header").style.display = 'flex';
        document.getElementById("hm").style.color = 'white';
        document.querySelector(':root').style.setProperty('--bg', 'black');
        set();
    }

    function print()
    {
        if (s >= 10) {
            if (m >= 10) {
                if (h >= 10) {
                    document.getElementById('hm').innerText = `${h}:${m}:${s}`;
                }
                else {
                    document.getElementById('hm').innerText = `0${h}:${m}:${s}`;
                }
            }
            else {
                if (h >= 10) {
                    document.getElementById('hm').innerText = `${h}:0${m}:${s}`;
                }
                else {
                    document.getElementById('hm').innerText = `0${h}:0${m}:${s}`;
                }
            }
        }
        else {
            if (m >= 10) {
                if (h >= 10) {
                    document.getElementById('hm').innerText = `${h}:${m}:0${s}`;
                }
                else {
                    document.getElementById('hm').innerText = `0${h}:${m}:0${s}`;
                }
            }
            else {
                if (h >= 10) {  
                    document.getElementById('hm').innerText = `${h}:0${m}:0${s}`;
                }
                else {
                    document.getElementById('hm').innerText = `0${h}:0${m}:0${s}`;
                }
            }
        }
    }

    set();