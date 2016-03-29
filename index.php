
<!DOCTYPE html>
<html lang="eng">
 <head> 
  <title>Contact form for your site by Anatoly Spektor</title>
  <!-- Bootstrap CSS -->
  <link href="./css/bootstrap.min.css" rel="stylesheet" media="screen">
 </head>
 <body>
 <br />
 <!-- a row has to be in a container -->
<div class="container"> 
 <!-- Contacts -->
 <div id="contacts">
   <div class="row">    
     <!-- Alignment -->
    <div class="col-sm-offset-3 col-sm-6">
       <!-- Form itself -->
          <form name="sentMessage" class="well" id="contactForm"  novalidate>
           <legend>Contact me</legend>
         <div class="control-group">
                    <div class="controls">
            <input type="text" class="form-control" 
                   placeholder="Full Name" id="name" required
                       data-validation-required-message="Please enter your name" />
              <p class="help-block"></p>
           </div>
             </div>     
                <div class="control-group">
                  <div class="controls">
            <input type="email" class="form-control" placeholder="Email" 
                            id="email" required
                       data-validation-required-message="Please enter your email" />
        </div>
        </div>  
              
               <div class="control-group">
                 <div class="controls">
                 <textarea rows="10" cols="100" class="form-control" 
                       placeholder="Message" id="message" required
               data-validation-required-message="Please enter your message" minlength="5" 
                       data-validation-minlength-message="Min 5 characters" 
                        maxlength="999" style="resize:none"></textarea>
        </div>
               </div>        
         <div id="success"> </div> <!-- For success/fail messages -->
        <button type="submit" class="btn btn-primary pull-right">Send</button><br />
          </form>
    </div>
      </div>
    </div>
   </div>
    
    
 <!-- JS FILES -->
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script> 
 <script src="./js/bootstrap.min.js"></script>
 <script src="./js/jqBootstrapValidation.js"></script>
 <script src="./js/contact_me.js"></script>

  </body>
</html>