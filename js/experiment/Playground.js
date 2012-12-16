var Playground = function(context)
{
	this.context = context;

	// Public variables for dat.gui use
	this.trails = false;
	this.density = 80;

	this.isDebug = true;
	if(this.isDebug)
	{
		this.debug();
	}

	this.init();
	this.animate();
};

Playground.prototype = {
	init: function()
	{
		this.particles = [];
		for(var i = 0; i < this.density; i++)
		{
			var p = new Particle();
			this.particles.push(p);
		}
	},

	animate: function()
	{
		if(this.trails)
		{
			this.context.fillStyle = "rgba(0,0,0,0.05)";
			this.context.fillRect(0, 0, screenWidth, screenHeight);
		}
		else
		{
			this.context.clearRect(0, 0, screenWidth, screenHeight);
		}
		if(this.isDebug)
		{
			this.stats.update();
		}

		// EXPERIMENT LOGIC
		for(i = 0, l = this.particles.length; i < l; i++)
		{
			this.particles[i].update(this.context);
			// Animate logic goes here
		}
		requestAnimationFrame(this.animate.bind(this));
	},

	debug: function()
	{
		this.stats = new Stats();
		this.stats.domElement.style = {
			position : 'absolute',
			top : 0,
			left : 0,
			zIndex : 100
		};
		document.body.appendChild(this.stats.domElement);
	}
};