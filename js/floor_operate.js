var operator = {
	select_floor:"Command(x): X",
	rorate:"function(vdeg){}"
}
operator.floors = function(ul) {
	var config = {
		x : ['X', 'F', 'U', 'B', 'D', 'M'],
		y : ['Y', 'R', 'F', 'L', 'B', 'E'],
		z : ['Z', 'U', 'R', 'D', 'L', 'S']
	};
	for (axis in config)
		$(ul).append("<li data-val='Command("+axis+").'>"+axis+"</li>");
    function list_set (node, array) {
        for (var i = 0; i < array.length; i++) {
            var val = array[i];
            $(node).append("<li data-val='"+val+"'>"+val+"</li>");
        }
        return node;
    }
    var children = $(ul).children()
    for (var i = children.length - 1; i >= 0; i--) {
        var node = children[i]
        var array = config[node.innerText];
        $(node).append("<ul></ul>")
        node = $(node).children().first()
        list_set(node, array)
    };
    return ul
}
$(function () {
    <!--Script-->
    operator.floors($('#select_floor'))
        .scroller({
            preset : 'list',
            labels : ['axis', 'command'],
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
	var cmd = this.select_floor.split(' ')[1];
	var twist = new ERNO.Twist(cmd, vdeg);
	cube.immediateTwist(twist)
}

window.operate = function(vdeg){operator.rorate(vdeg)}
