package commons

import (
	"encoding/json"
	"fmt"
	"os"
)

type Configuration struct {
	BrokerURI string
}

/*
func NewConfiguration() Configuration {
	return Configuration{}
}
*/

var configuration = Configuration{}

// initialize configuration from the given JSON file
func InitConfig(configFile string) error {
	fmt.Println("Init configuration from file : " + configFile)
	file, err := os.Open(configFile)
	if err != nil {
		panic("Cannot open configuration file '" + configFile + "'")
	}
	defer file.Close()

	decoder := json.NewDecoder(file)
	err = decoder.Decode(&configuration)
	if err != nil {
		panic("Cannot decode configuration file '" + configFile + "'")
	}

	fmt.Println("Configuration initialized :")
	fmt.Println(" . BrokerURI      :" + configuration.BrokerURI)

	return nil
}

func GetBrokerURI() string {
	return configuration.BrokerURI
}
