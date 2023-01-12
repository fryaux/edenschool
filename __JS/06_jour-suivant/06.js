let a = prompt('Jour ?');

if(a.toLowerCase() == 'lundi'){
    document.write('mardi');
}
else if(a.toLowerCase() == 'mardi'){
    document.write('mercredi');
}
else if(a.toLowerCase() == 'mercredi'){
    document.write('jeudi');
}
else if(a.toLowerCase() == 'jeudi'){
    document.write('vendredi');
}
else if(a.toLowerCase() == 'vendredi'){
    document.write('samedi');
}
else if(a.toLowerCase() == 'samedi'){
    document.write('dimanche');
}
else if(a.toLowerCase() == 'dimanche'){
    document.write('lundi');
}
else
document.write('Erreur');