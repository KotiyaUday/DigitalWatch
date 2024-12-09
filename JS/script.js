function updateTime()
    {
        let current = new Date();

        let hour = current.getHours();
        let min = current.getMinutes();
        let sec = current.getSeconds();
        let day = current.getDay();
        let date = current.toString().slice(4,10);

        let hm = hour + ":" + min;

        document.getElementById("date").innerText = date;
        document.getElementById("hm").innerText = hm;
        document.getElementById("sec").innerText = sec;
        document.getElementById(1).classList.remove('active');
        document.getElementById(day).classList.add('active');

        setTimeout(()=>{
            document.getElementById("load").style.display='none';
            document.getElementById("main").style.display='flex';
            document.getElementById("header").style.display='flex';
        },1000);
    }

    setInterval(updateTime,1000);