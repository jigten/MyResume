var bio = {
	"name": "Ugyen Jigten Dorji",
	"role": "MEAN Full-Stack Developer, Android/Hybrid Developer",
	"contacts": {
		"email": "ujigten@gmail.com",
		"github": "jigten",
		"twitter": "@jigt4n",
		"location": "Bangkok, Thailand"
	},

	"picture": "images/fry.jpg",
	"welcomeMessage": "Lover of all things geeky! I'm currently studying Bachelors in Computer Science in Thailand, Bangkok. Thanks for stopping by!",
	"skills": ["Javascript", "Java", "Angular2/4", "TypeScript", "NodeJS", "ROR"]
};

var work = {
	"jobs": [
		{
			"employer": "NECTEC",
			"title": "Intern",
			"location": "Thailand Science Park, Thailand",
			"datesWorked": "June 2016 - September 2016",
			"description": "Summer internship program for three months. Worked on designing an invention prototype " +
			"and also the patent document. The invention was an embedded system that could detect a child inside " +
			"a vehicle and notify care takers if the child is in danger."
		},
	]
};

var education = {
	"schools": [
		{
			"name": "Asian Institute of Technology",
			"datesAttended": "2013-Present",
			"location": "Bangkok, Thailand",
			"degree": "Bachelors of Science",
			"major": "Computer Science",
			"minor": "-",
			"url": "www.ait.asia"
		}
	],

	"onlineCourses": [
		{
			"school": "Udacity",
			"title": "Object Oriented JavaScript",
			"completed": "November 2016",
			"url": "https://www.udacity.com/courses/ud015"
		},
	]
};

var projects = {
	"projects": [
		{
			"title": "Pong HTML5 Canvas Game",
			"datesWorked": "October 2016 - November 2016",
			"description": "Online HTML5 Canvas game which involes a player playing a classic arcade game versus an AI controlled challenger.",
			"images": ["images/pong1.PNG", "images/pong2.PNG"],
			"url": "-"
		},

		{
			"title": "Embedded System for Detection of Infants in Automobiles to Prevent Hyperthermia",
			"datesWorked": "May 2016 - June 2017",
			"description": "An Arduino based project to detect infants forgotten inside a vehicle and notify parents to prevent hyperthermia deaths.",
			"images": ["images/finalPrototype.jpg"],
			"url": "-"
		},

		{
			"title": "Patatap Clone",
			"datesWorked": "May 2017 - June 2017",
			"description": "A Patatap clone that written in JavaScript using PaperJS and HowlerJS frameworks.",
			"images": ["images/patatap.png"],
			"url": "-"
		},
		{
			"title": "RESTful Node Blog App",
			"datesWorked": "Jan 2016 - March 2016",
			"description": "A RESTful blog application built with NodeJS and Express framework. A place to post all your favourite onscreen ladies ;)",
			"images": ["images/blog.png"],
			"url": "-"
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}

function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();

projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			

		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolMinor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}

education.display();


/**
 * Skills Chart
 */
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Skills'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Used (year)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Duration (months)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 250,
            y: 0,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'Used in {point.x} for {point.y} month(s)'
                }
			}
		},
		series: [{
				name: 'Java',
				color: 'rgba(223, 83, 83, .5)',
				data: [[2013, 6], [2014, 2], [2015, 4], [2016, 4]]
			},
			{
				name: 'SQL',
				color: 'rgba(119, 152, 80, .5)',
				data: [[2016, 2]]
			},
			{
				name: 'PL/SQL',
				color: 'rgba(170, 162, 30, .5)',
				data: [[2016, 2], [2017, 1]]
			},
			{
				name: 'C++',
				color: 'rgba(0, 102, 0, .5)',
				data: [[2016, 3.5]]
			},
			{
				name: 'Javascript',
				color: 'rgba(204, 0, 0, .5)',
				data: [[2016, 8]]
			},
			{
				name: 'NodeJs',
				color: 'rgba(204, .5, 0, .5)',
				data: [[2016, 6], [2017, 2]]
			},
			{
				name: 'HTML/CSS',
				color: 'rgba(153, 51, 0, .5)',
				data: [[2015, 5], [2016, 4]]
			},
			{
				name: 'Angular2/4',
				color: 'rgba(80, 200, 150, .5)',
				data: [[2016, 5], [2017, 6]]
			}
			]
	});
});


$("#mapDiv").append(googleMap);
