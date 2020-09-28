// USING EVENT DELEGATION
function getTarget(e) { // DECLARE FUNCTION
    if (!e) { // IF THERE IS NO EVENT OBJECT
        e = window.event; // USE ILD (IE) EVENT OBJECT
    }
    return e.target || e.srcElement; // GET THE TARGET OF EVENT
}

function itemDone(e) { // DECLARE FUNCTION
    // REMOVE ITEM FROM THE LIST
    var target, elParent, elGrandparent; // DECLARE FUNCTION
    target = getTarget(e); // Get the item clicked link 
    elParent = target.parentNode; // Get its list item
    elGrandparent = target.parentNode.parentNode; // Get its list 
    elGrandparent.removeChild(elParent); // Remove list item from list

    // PREVENT THE LINK FROM TAKING YOU ELSEWHERE
    if (e.preventDefault) { // IF preventDefault() works
        e.preventDefault(); // Use preventDefault()
    } else { // Otherwise
        e.returnValue = false; // Use old (IE) version
    }
}

// SET UP EVENT LISTENERS TO CALL itemDone() on click
var el = document.getElementById('shoppingList'); // Get shopping list
if (el.addEventListener) { // if event listeners work
    el.addEventListener('click', function(e) { // Add listener on click
        itemDone(e); // it calls itemDone()
    }, false); // Use bubbling phase for flow
} else { //Otherwise
    el.attachEvent('onclick', function(e) { // use old (IE) Model: onclick
        itemDone(e); // Call itemDone()
    });
}