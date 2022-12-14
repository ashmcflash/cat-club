$(function () {
  let petTypes = [
    ["yes", ["Siamese", "Persian", "Maine Coon", "Ragdoll", "Sphynx", "Other"]],
    ["no", ["Planning on adopting", "Allergies", "No cat :("]]
  ];

  $("#petCat").on("change", function (e) {
    $("#petType").prop("disabled", false);

    let inputval = this.value;

    $.each(petTypes, function (key, value) 
    {
      lf (inputval === value[0]) 
      {
        $.each(value, function (nestkey, nestvalue) 
        {
          switch (nestkey) 
          {
            case 0:
              $("label[for=petType]").text(nestvalue);
              $("#petType").empty();
              $("#petType").append(
                $("<option>").text(`select a ${nestvalue} `)
              );
              break;
            case 1:
              $.each(nestvalue, function (namekey, namevalue) 
              {
                console.log(namekey, namevalue);

                $("#petType").append(
                  $("<option>").val(namevalue).text(namevalue)
                  );
                });
                break;
              }
            });
          }
        });
        
      });
      
  });
  
/* 
Random Cat Fact Generator
*/

var factPlaceholder = document.getElementById("cat-fact");
var showFact = document.getElementById("show-fact");

var CatFacts = ["The ancient Egyptians were the first to tame the cat (in about 3000 BC), and used them to control pests.",
               "Cats share 95.6% of their DNA with tigers.",
               "Cats are asleep for 70% of their lives.",
               "Cat kidneys are super efficient, they can rehydrate by drinking seawater.",
               "Kittens who are taken along on short, trouble-free car trips to town tend to make good passengers when they get older. They get used to the sounds and motions of traveling and make less connection between the car and the visits to the vet."]

var factNumber;

function randomFact(){
  return CatFacts[factNumber];
}

showFact.addEventListener('click', function(){
  factNumber = Math.floor(Math.random()*5);
  factPlaceholder.textContent = randomFact();
}); 