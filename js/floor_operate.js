var operator = {
	select_floor:"x 0",
	rorate:"function(vdeg){}"
}
operator.floors = function(ul) {
    var axis = ['x', 'y', 'z'];
    var floor= [1,2,3];
    function list_set (node, array) {
        for (var i = 0; i < array.length; i++) {
            var val = array[i];
            $(node).append("<li data-val='"+val+"'>"+val+"</li>");
        }
        return node;
    }
    var children = $(list_set(ul, axis)).children()
    for (var i = children.length - 1; i >= 0; i--) {
        var node = children[i]
        $(node).append("<ul><li data-val=0>e</li></ul>")
        node = $(node).children().first()
        list_set(node, floor)
    };
    return ul
}
$(function () {
    <!--Script-->
    operator.floors($('#select_floor'))
        .scroller({
            preset : 'list',
            labels : ['axis', 'floor'],
            mode: 'scroller',
            display: 'inline',
            theme: 'sense-ui',
            defaultValue: ['x', 0],
            onChange:function(valueText, inst){
            	operator.select_floor = valueText;
            },
        })
});

operator.rorate = function(vdeg){
	var floor = this.select_floor;
	var command = {
		'x 0':'X',
		'x 1':'L',
		'x 2':'M',
		'x 3':'R',
		
		'y 0':'Y',
		'y 1':'D',
		'y 2':'E',
		'y 3':'U',
		
		'z 0':'Z',
		'z 1':'F',
		'z 2':'S',
		'z 3':'B',
	};
	var twist = new ERNO.Twist(command[floor], vdeg);
	cube.immediateTwist(twist)
}

window.operate = function(vdeg){operator.rorate(vdeg)}
