var FEATURED_COUNT = 4;

Template.home.helpers({
  // selects FEATURED_COUNT number of recipes at random
  featuredRecipes: function() {
    var recipes = _.values(RecipesData);
    var selection = [];
    
    for (var i = 0;i < FEATURED_COUNT;i++)
      selection.push(recipes.splice(_.random(recipes.length - 1), 1)[0]);

    return selection;
  },
  
  activities: function() {
    return Activities.latest();
  },
  
  diaAtual: function() {
      var date = new Date();
      var options = {
          weekday: "long", year: "numeric", month: "long",
          day: "numeric"
      };
      return date.toLocaleDateString("pt-br", options);
  },
  
  mesAtual: function() {
      var date = new Date();
      var options = {
          month: "long"
      };
      return date.toLocaleDateString("pt-br", options);
  },
  
  latestNews: function() {
    return News.latest();
  }
});