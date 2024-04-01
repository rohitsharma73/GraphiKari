import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: 
  "skh6qhAlxVIGVhOEUxn86lrk533v4CVVQsSeCe08iZblS7w5do91ITndkVWTQwjDUJWvc7KbsNt2MlwAAgYRoT63RMqavqA9MazwamiFhe9MF2gJKqhLye7BXL3fYNCon94tW83JFYfGk0q24rpuVDim7R7rNUDPtlxN8IhFtGjtLDEP8LS9",
})
