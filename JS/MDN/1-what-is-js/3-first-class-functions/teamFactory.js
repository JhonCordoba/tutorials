function createTeam(teamName){
	return function addPlayerToTeam(playerName){
		console.log(`Wellcome ${playerName}, you are on team: ${teamName}!`);
	}
}

englandTeam = createTeam("England");

/**
 * When i created to englandTeam, englandTeam keep linked to the createTeam scope, so englandTeam
 * has access to teamName (closure). Each time i create a new team, each team has its own createTeam
 * scope.
 * */
englandTeam("Petrosky");
englandTeam("Franciska");
englandTeam("Arelisky");


colombiaTeam = createTeam("Colombia");
colombiaTeam("Brayan Uribe");
colombiaTeam("Fico Estiven");
colombiaTeam("Puerquito");