<template>
  <div id="main">
    <div class="fof">
      <h1>Error 404</h1>
      <p>
        <RouterLink to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-fill pb-1" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
          </svg>
          Home
        </RouterLink>
      </p>
    </div>
  </div>
</template>

<style>
  #main{
    transition: all 0.6s;
    font-family: 'Lato', sans-serif;
    color: #888;
    margin: 0;
    display: table;
    width: 100%;
    height: 100vh;
    text-align: center;
  }

  #main .fof{
    display: table-cell;
    vertical-align: middle;
  }

  #main .fof h1{
    font-size: 50px;
    display: inline-block;
    padding-right: 12px;
    animation: type .5s alternate infinite;
  }

  #main .fof a{
    color: black;
    text-decoration: none;
  }

  @keyframes type{
    from{box-shadow: inset -3px 0px 0px #888;}
    to{box-shadow: inset -3px 0px 0px transparent;}
  }
</style>