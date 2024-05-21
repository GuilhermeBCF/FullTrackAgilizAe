<template>
	<main id="dashboard-page">
		<header>
            </header>
            <div class="separator">
                <div class="info1">
                    <h3>Dashboard</h3>
                </div>
                <div class="search">
                    <input type="text" placeholder="Pesquisar...">
                    <i class='bx bx-search'></i>
                </div>
            </div>

            <div class="analytics">
                <div id="item1" class="item">
                    
                    <h1 class="text-edit">Localização</h1>
                    <i class='bx bx-map-pin' style='color:white'></i>
                </div>

                <div id='item2' class="item">
					<h1 class="text-edit">Acesso</h1>
                    <i class='bx bx-user-voice' style='color:white'></i>
                </div>
                <div id='item3' class="item">
					<h1 class="text-edit">Reuniões</h1>
                    <i class='bx bx-support' style='color:white'></i>
                </div>
                <div id='item4' class="item">
					<h1 class="text-edit">Notificações</h1>
                    <i class='bx bx-bell' style='color:white'></i>
                </div>
            </div>

            <div class="separator">
                <div class="info">
                    <h3>Rascunhos</h3>
                </div>
                <input class="data" type="date" value="2023-10-15">
            </div>

            <div class="planning">
                <div class="item">
                    <div class="left">
                        <div class="icon">
                            <i class='bx bx-book-alt' style='color:white'></i>
                        </div>
                        <div class="details">
                            <h5>Reunião - Supervisores</h5>
                            <p>8:00 - 10:00</p>
                        </div>
                    </div>
                    <i class='bx bx-dots-vertical-rounded'></i>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="icon">
                            <i class='bx bx-edit-alt'style='color:white'></i>
                        </div>
                        <div class="details">
                            <h5>Revisão</h5>
                            <p>13:00 - 14:00</p>
                        </div>
                    </div>
                    <i class='bx bx-dots-vertical-rounded'></i>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="icon">
                            <i class='bx bx-headphone' style='color:white'></i>
                        </div>
                        <div class="details">
                            <h5>Call</h5>
                            <p>15:00 - 16:00</p>
                        </div>
                    </div>
                    <i class='bx bx-dots-vertical-rounded'></i>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="icon">
                            <i class='bx bx-volume-low' style='color:white'></i>
                        </div>
                        <div class="details">
                            <h5>Relatório</h5>
                            <p>19:00 - 20:00</p>
                        </div>
                    </div>
                    <i class='bx bx-dots-vertical-rounded'></i>
                </div>
            </div>
	</main>
</template>
<style>
main header{
    display: flex;
    align-items: center;
    gap: 15px;
}

main header h5{
    margin-top: 0.5rem;
    font-size: 18px;
    color: #f8221b;
    font-weight: 400;
}

main .separator{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

main .separator .info{
    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 30px;
}

main .separator .info h3{
    font-size: 30px;
}

main .separator .info a{
    margin-top: 6px;
    font-size: 14px;
}

main .separator .search{
    display: flex;
    align-items: center;
    gap: 14px;
}

main .separator .search i{
    font-size: 20px;
    color: #555555;
}

main .separator .search input{
    border: none;
	border-radius: 4px;
    font-size: 14px;
    width: 80px;
    outline: none;
}

main .separator .search input::placeholder{
    color: #BDBDBD;
}

main .analytics{
    display: grid;
	grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr;
    gap: 20px;
    margin-top: 20px;
}

main .analytics .item{
    clip-path: polygon(100% 0, 100% 90%, 85% 100%, 0 100%, 0 0);
    display:flex;
    align-items:self-end;
    justify-content: space-between;
    height: 500px;
    min-width: 214px;
    padding: 20px;
}

main .analytics .item h1{
    font-style: italic;
	font-weight: bold;
	font-size: 30px;
	font-family: arial, sans-serif;
    color: white;
}

main .analytics .item i{

    font-size: 80px;
    color: #ffffff;
}


.analytics .item:nth-child(1) {
    position: relative;
    overflow: hidden;
}

.analytics .item:nth-child(1)::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: radial-gradient(circle, rgba(155, 2, 2) 0%, rgba(50, 2, 2) 100%), 
                url("https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2017/03/google-maps.jpg");
    background-size: cover;
    background-blend-mode: multiply;
    z-index: -1;
}

.analytics .item:nth-child(2) {
    position: relative;
    overflow: hidden;
}

.analytics .item:nth-child(2)::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: radial-gradient(circle,rgba(96, 96, 96) 0%, rgba(6,6,6) 100%),
                url("https://www.dimep.com.br/wp-content/uploads/2019/05/1473771604.492882.jpe");
    background-size: cover;
    background-position: center;
    background-blend-mode: multiply;
    z-index: -1;
}


.analytics .item:nth-child(4) {
    position: relative;
    overflow: hidden;
}

.analytics .item:nth-child(4)::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: radial-gradient(circle,rgba(96, 96, 96) 100%, rgba(6,6,6) 100%),
                url("https://img.freepik.com/vetores-premium/icone-de-lembrete-de-notificacao-vermelho_165488-4292.jpg");
    background-size: cover;
    background-position: center;
    background-blend-mode: multiply;
    z-index: -1;
}

.analytics .item:nth-child(3) {
    position: relative;
    overflow: hidden;
}

.analytics .item:nth-child(3)::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: radial-gradient(circle, rgba(155, 2, 2) 2%, rgba(50, 2, 2) 100%),
                url("https://targetteal.com/wp-content/uploads/meeting-of-people.png");
    background-size: cover;
    background-position: right;
    background-blend-mode: multiply;
    z-index: -1;
}



main .separator input{
    border: none;
    color: #f80000;
    font-weight: bold;
    outline: none;
    width: 106px;
}

input[type="date"]::-webkit-calendar-picker-indicator{
    opacity: 0.5;
    font-size: 16px;
    cursor: pointer;
}

main .planning{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 20px;
}

main .planning .item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #F7F7F7;
    border-radius: 20px;
}

main .planning .item .left{
    display: flex;
    align-items: center;
    gap: 10px;
}

main .planning .item .left .icon{
    width: 50px;
    height: 50px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

main .planning .item:nth-child(1) .left .icon{
    background: #ff5353;
}

main .planning .item:nth-child(1) .left .icon i{
    color: #ff0000;
}

main .planning .item:nth-child(2) .left .icon{
    background: #494949;
}

main .planning .item:nth-child(2) .left .icon i{
    color: #000000;
}

main .planning .item:nth-child(3) .left .icon{
    background: #b1b1b1;
}

main .planning .item:nth-child(3) .left .icon i{
    color: #222222;
}

main .planning .item:nth-child(4) .left .icon{
    background: #fd3939;
}

main .planning .item:nth-child(4) .left .icon i{
    color: #e60808;
}

main .planning .item .left .details h5{
    font-size: 12px;
    font-weight: 600;
}

main .planning .item .left .details p{
    font-size: 12px;
    color: #BDBDBD;
}

main .planning .item > i{
    cursor: pointer;
}

</style>