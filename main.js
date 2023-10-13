$(document).ready(function(){
    var titulo = $('#titulo');
    var tamanho = [];
    titulo.html('<h2 style="cursor: pointer; text-decoration: none;">Tarefas</h2>');
    
    var tarefasExistentes = new Set(); 
    
    $('#formulario').on('submit', function(e){
        e.preventDefault();
        
        var tarefa = $('#txtTarefa').val();
        if (tarefa.length == 0){
            alert(`Não adicione tarefas vazias`)
            return;
        }
        if (tarefasExistentes.has(tarefa)) {
            
            alert('Tarefa já existe na lista');
            return; 
        }
        
        console.log(tarefa);
        var novoItem = $('<li>' + tarefa + '</li>');
        $('ul').append(novoItem);

        
        tarefasExistentes.add(tarefa);

        novoItem.on('click', function(){
            
            novoItem.css('text-decoration', 'line-through');
        });

        $('#txtTarefa').val(''); 
    });
});