let env = "qa";
let role = "buyer";

switch (env.toLowerCase().trim()) {
    case "qa":
        console.log(`You are in ${env} environment`);
         switch (role.toLowerCase().trim()) {
            case "buyer":
                console.log(`You are a ${role}`);
                break;
            case "seller":
                console.log(`You are a ${role}`);
                break;
            case "distributor":
                console.log(`You are a ${role}`);
                break;
            
        }
        break;
    case "dev":
        console.log(`You are in ${env} environment`);
        break;
        switch (role.toLowerCase().trim()) {
            case "buyer":
                console.log(`You are a ${role}`);
                break;
            case "seller":
                console.log(`You are a ${role}`);
                break;
            case "distributor":
                console.log(`You are a ${role}`);
                break;
        }

        default:
                console.log(`You are a unknown role`);

    }