### schemeWizard.html
In your enrollment wizard html it should:
```html
<div class="content" oninitialize={handleInitialize}>
    <template if:true={enrollmentwizardsample1}>
        <c-enrollment-wizard-sample1 entity-context={entityContext} wizard-path-data={currentPathData}>
        </c-enrollment-wizard-sample1>
    </template>
    <template if:true={enrollmentwizardsample2}>
        <c-enrollment-wizard-sample2 entity-context={entityContext}>
        </c-enrollment-wizard-sample2>
    </template>
    <template if:true={enrollmentwizardsample3}>
        <c-enrollment-wizard-sample3 entity-context={entityContext} ongetdata={handleGetData}>
        </c-enrollment-wizard-sample3>
    </template>
</div>
```

### Notes
In the sample path components provided, each of them are having slight difference, to provide a better idea and better picture on the framework.

| Sample Path Component  | connectedCallback() | save() | validation() | 
| ------------ | ------------ | ------------ | ------------ |
| 1 | ✅  (async, await)| ✅  (async, await)| ✅  (async, await)
| 2 | ✅ (.then)| ✅ (async, await)| ✅ Synchronous