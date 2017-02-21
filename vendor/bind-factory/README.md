# \<bind-factory\>

Bind a local property to a computed value

This is useful if you need to use a computed property within a computed binding,
ordinarily this can just be achieved with a property on the host.

However, within a dom-repeat, you cannot simply create a property for the current item.

The problem (the following is invalid):
```
<dom-repeat items="{{items}}">
  [[_computeFromKey(_concat('prefix_',item.id,'_suffix'))]]
</dom-repeat>
```

The solution:
```
<dom-repeat items="{{items}}">
  <bind-factory bind="[[_concat('prefix_',item.id,'_suffix')]]" to="{{myKey}}"></bind-factory>
  [[_computeFromKey(myKey)]]
</dom-repeat>
```
