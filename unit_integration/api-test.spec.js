chai.should();
 
describe('API', function() {
  beforeEach(function() {
    this.xhr = sinon.useFakeXMLHttpRequest();
 
    this.requests = [];
    this.xhr.onCreate = function(xhr) {
      this.requests.push(xhr);
    }.bind(this);
  });
 
  afterEach(function() {
    this.xhr.restore();
  });
 
  it('should parse fetched data as JSON', function(done) {
    var data = { foo: 'bar' };
    var dataJson = JSON.stringify(data);
   
    api.get(function(err, result) {
      result.should.deep.equal(data);
      done();
    });
   
    this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
  });
  
  it('should send given data as JSON body', function() {
    var data = { hello: 'world' };
    var dataJson = JSON.stringify(data);
   
    api.post(data, function() { });
   
    this.requests[0].requestBody.should.equal(dataJson);
  });
  
  it('should return error into callback', function(done) {
    api.get(function(err, result) {
      err.should.exist;
      done();
    });
   
    this.requests[0].respond(500);
  });
});