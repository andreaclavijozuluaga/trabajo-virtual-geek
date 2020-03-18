'use strict';
const activableSection=document.querySelector('div');


(activableSection.classList.contains('success')) ? activableSection.innerHTML='<h1>Correcto</h1><p>Los datos son correctos</p>' : '<h1>Notificacion</h1><p>Texto</p>';

(activableSection.classList.contains('error')) ? activableSection.innerHTML='<h1>ERROR</h1><p>Ha surgido un error</p>': '<h1>Notificacion</h1><p>Texto</p>';

(activableSection.classList.contains('warning')) ? activableSection.innerHTML='<h1>¡Aviso!</h1><p>Revise la información</p>' :'<h1>Notificacion</h1><p>Texto</p>';

