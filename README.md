nycda-angularJS-finalProj
=========================

final project for nycda angularJS course

Final project proposal.

<h3>Case Study App</h3>
An app that shows different agency case studies to users

<h3>Product summary (what does it do)</h3>
Allows users to view different case studies from various advertising campaigns.
User permissions would dictate which content they can see or which parts of content they can't see.
Users may also be able to download a PDF or some takeaway.

<h3>Audience target</h3>
prospective clients to an agency
internal creative teams can use as a reference to see how campaigns impact

<h3>Targeted devices and browsers</h3>
Mobile first responsive site.
IE9 and up.
Chrome, safari and FF.

<h3>Expectation of strengths (easy things)</h3>
Database of campaigns (case studies)
routing to views through routing and URL


<h3>Expectation of challenges (things you want to learn, or difficult)</h3>
Database of users
User permissions


<h3>Future goals (if any) for project</h3>

Data visualization of data, whether it be analytics or whatever I can get my hands on.

<h3> Trying to share $scope.user across controllers.</h3>


<i> <p>In trying to compare user.email to theCaseStudies.securitylevel objects I need to share the user object from two controllers

seems like a good solution for my particular problem (routing with fb simple login)
https://github.com/firebase/angularfire-seed/blob/master/app/js/routes.js#L14</p>

<p>Once logged in the router takes you to the /main directory where the MainCtrl fires. When the MainCtrl page loads $scope.user is undefined.</p>
<p>The next issue is that I can't access the securitylevels in the MainCtrl.js as:</p>
 <ul>
     <li>$scope.theCaseStudies.securitylevels;</li>
 </ul>
 <p>But I can access them in the html via theCaseStudies:<p>

<ul>
     <li>security: {{theCaseStudies.securitylevels[0].user}} on line 5 of the main.html </li>
</ul>


<h3> in the best interest of time, i've taken a new approach </h3>

<p>I'm dumping the routers and just using the main.index and main controller so there is no scope issue.
still can't access the securitylevels object in case studies</p>




<h3>Resources:</h3>

AngularFire Auth:

seems like a good solution for my particular problem (routing with fb simple login)
https://github.com/firebase/angularfire-seed/blob/master/app/js/routes.js#L14

issues with user across controllers
http://stackoverflow.com/questions/17259556/factory-get-current-user-id-for-firebase-simple-login-email-password

Sample jsfiddle:
http://jsfiddle.net/firebase/wPBj5/

https://www.firebase.com/docs/web/libraries/angular/guide.html

http://tamas.io/angularjs-firebase-angularfire/

https://groups.google.com/forum/#!topic/firebase-talk/POcs7m5gihg

https://www.firebase.com/docs/web/libraries/angular/guide.html
http://ericsaupe.com/tag/angularjs-firebase-login/
http://www.thinkster.io/angularjs/eHPCs7s87O/angularjs-tutorial-learn-to-rapidly-build-real-time-web-apps-with-firebase

<h4>angularfire</h4>
https://egghead.io/lessons/angularjs-get-started-with-firebase-and-angularfire


<h4>yo angular:route</h4>

http://briantford.com/blog/angular-yeoman

<h4>Boostrap</h4>

centering content in a row using offset or creating your own class
http://stackoverflow.com/questions/18153234/center-a-div-using-bootstrap-3-markup-or-css

DEPLOYING:

comment out lines in Gruntfile.js
   // 'newer:jshint',
  //  'test',

grunt build

running into errors behind firewall on grunt build needed to :
git config --global url."https://".insteadOf git://

then follow these directions:
https://www.firebase.com/docs/hosting/guide/deploying.html

change your public folder to "dist"

as that is where Grunt builds your files.




mobile:nycda-angularJS-finalProj Mobile_Home$ firebase init



Please sign into your Firebase account to continue...
Email:XXXX.XXXXX@gmail.com
Password:
----------------------------------------------------
Your Firebase Apps XXXXX.XXXXXX@gmail.com
----------------------------------------------------
case-studies

----------------------------------------------------
Enter the name of the Firebase app you would like to use for hosting
Firebase app: case-studies
----------------------------------------------------
Site URL: https://case-studies.firebaseapp.com
----------------------------------------------------
Enter the name of your app's public directory.
(usually where you store your index.html file)
Public Directory: (current directory) app
Initializing app into current directory...
Writing firebase.json settings file...
Successfully initialized app
To deploy: firebase deploy
mobile:nycda-angularJS-finalProj Mobile_Home$ firebase deploy
Preparing to deploy Public Directory...
progress: 100%

