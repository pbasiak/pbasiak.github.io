//Initialize a snapping slider

var ramSlider = document.getElementById('server-conf-box');

noUiSlider.create(ramSlider, {
    range: {
        'min': 0,
        '10%': 10,
        '20%': 20,
        '30%': 30,
		// Nope, 40 is no fun.
        '50%': 50,
        '60%': 60,
        '70%': 70,
		// I never liked 80.
        '90%': 90,
        'max': 100
    },
    snap: true,
    start: [50]
});


//Read the slider values

var ramValue = [
    document.getElementById('skip-value-lower'),
    document.getElementById('skip-value-upper')
];

ramSlider.noUiSlider.on('update', function( values, handle ) {
    ramValue[handle].innerHTML = values[handle];
});

