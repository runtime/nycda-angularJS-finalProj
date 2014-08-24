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


<i> <p>In trying to compare user.email to theCaseStudies.securitylevel objects I need to share the user object from two controllers</p>

<p>Once logged in the router takes you to the /main directory where the MainCtrl fires. When the MainCtrl page loads $scope.user is undefined.</p>
<p>The next issue is that I can't access the securitylevels in the MainCtrl.js as:</p>
 <ul>
     <li>$scope.theCaseStudies.securitylevels;</li>
 </ul>
 <p>But I can access them in the html via theCaseStudies:<p>

<ul>
     <li>security: {{theCaseStudies.securitylevels[0].user}} on line 5 of the main.html </li>
</ul>


<b>Current Console log:</b>

<b>login $scope.user.email: my.name@gmail.com login.js:47</b>
MainCtrl: undefined main.js:16
MainCtrl theCaseStudies.securitylevels: undefined main.js:21
<b>MainCtrl $scope.user.email: undefined </b>


<h3>Resources:</h3>

AngularFire Auth:
best example of auth (outdated)
http://www.ng-newsletter.com/posts/back-end-with-firebase.html

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
