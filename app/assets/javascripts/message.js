$(function(){
      function buildHTML(message){
        if ( message.image ) {
          var html =
            `<div class="message">
              <div class="message__info">
                <div class="message__info-name">
                  ${message.user_name}
                </div>
                <div class="message__info-date">
                  ${message.created_at}
                </div>
              </div>
              <div class="message__text">
                <p class="lower-message__content">
                  ${message.content}
                </p>
              </div>
              <img src=${message.image} >
            </div>`
          return html
        } else {
          var html =
            `<div class="message">
              <div class="message__info">
                <div class="message__info-name">
                  ${message.user_name}
                </div>
                <div class="message__info-date">
                  ${message.created_at}
                </div>
              </div>
              <div class="message__text">
                <p class="lower-message__content">
                  ${message.content}
                </p>
              </div>
            </div>`
          return html;
        };
      }

$('.new_message').on('submit', function(e){
  e.preventDefault()
  var formData = new FormData(this);
  var url = $(this).attr('action');
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
    .done(function(data){
    var html = buildHTML(data);
    $('.chat-main__message-list').append(html);
    $('form')[0].reset();
    $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
    $(".form__submit-btn").prop('disabled', false);
  })
  .fail(function() {
    alert("メッセージ送信に失敗しました");
});
})
});