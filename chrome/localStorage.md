Chrome browser localStorage size
=====

The size depends on two factors
- web default settings, LocalStorage and SessionStorage remain fixed at 5 MB.
- web can request up to the size of Capacity/3/5 for App Cache, IndexedDB, and File System 
- App or Extension can request unlimited File System storage.
