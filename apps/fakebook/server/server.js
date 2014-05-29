Meteor.publish("posts",function(userid){
	return Posts.find({});
})
Meteor.publish("likes",function(postid){
	return Likes.find({post:postid});
})
Meteor.publish("appusers",function(){
	return Meteor.users.find();
})
Meteor.publish("users",function(){
	return Meteor.users;
})


Meteor.methods({
	//{text:'',owner:'',date:'',parent:''}
	'addPost':function(options){
		var post = {
			text:options.text,
			owner:Meteor.userId(),
			date:new Date(),
			parent:options.parent
		}
		Posts.insert(post);
	},
	'removePost':function(id){
		Posts.remove({_id:id});
	},
	'removeAllPosts':function(){
		Posts.remove({});
	},
	'addNames':function(){
		Meteor.users.update('CzFzR8iGtcuvFnTrN', {$set: {'profile.fullname': 'Mike Tyson' }});
		Meteor.users.update('L2s7PNu5YGdDW2Cbv', {$set: {'profile.fullname': 'Evander Holyfield' }});
	}
})