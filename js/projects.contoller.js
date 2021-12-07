console.log('Starting up');
'use strict'


function init() {
  gProjects = createProjects()
  renderProjects()
  $('.contact').click(() => openCanvas())
  $('.submit-mail').click(() => {
      var email = $('.email-add').val();
      var subject = $('.email-subject').val();
      var message = $('.message-body').val();
      if (!subject || !message || !email) return;
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=baraktv@gmail.com&su=${subject}&body=${message}`);
  })
}



function renderProjects() {
  var strHtmls = gProjects.map(function (project) {
    return `<div class="col-md-4 col-sm-6 portfolio-item">
      <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="openModal('${project.id}')">
            
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="${project.url}" alt="">
              </a>
            
            <div class="portfolio-caption">
              <h4>${project.name}</h4>
              <p class="text-muted">${project.title}</p>
            </div>
          </div>`
  })
  $('.proj').html(strHtmls.join(''));
}

function openModal(id) {
  var project = findProject(id);
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  $('.portfolio-modal h2').text(project.name);
  $('.modal-body .img-fluid').attr("src", project.url);
  $('.modal-body .item-intro').text(project.title);
  $('.modal-body .description').text(project.desc)
  $('.date').text(`Published Date: ${new Date(project.publishAt).toLocaleDateString('en-US', options)}`);
  $('.modal-body a').attr("href", `https://baraklb.github.io/${project.id}/`);
  $('.modal-body a').text(project.name);
}