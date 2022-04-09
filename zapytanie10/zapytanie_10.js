db.poeple.updateMany(
   { job: "Editor" },
   { $unset: { email: ""} }
)